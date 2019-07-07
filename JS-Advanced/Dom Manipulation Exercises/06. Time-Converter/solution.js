function attachEventsListeners() {
    let inputs;
    inputs = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    let btns = {
        days: document.getElementById('daysBtn'),
        hours: document.getElementById('hoursBtn'),
        minutes: document.getElementById('minutesBtn'),
        seconds: document.getElementById('secondsBtn')
    }

    Object.entries(btns).forEach(([label, btn]) => {
        btn.addEventListener('click', () => {
            if (inputs[label].value === '') {
                return;
            }
            let time = Number(inputs[label].value);
            if (label === 'days') {
                convertDays(time);
            } else if (label === 'hours') {
                convertHours(time);
            } else if (label === 'minutes') {
                convertMinutes(time);
            } else if (label === 'seconds') {
                convertSeconds(time);
            }
        });
    });

    const convertDays = days => {
        inputs.hours.value = days * 24;
        inputs.minutes.value = inputs.hours.value * 60;
        inputs.seconds.value = inputs.minutes.value * 60;
    };

    const convertHours = hours => {
        inputs.days.value = hours / 24;
        inputs.minutes.value = hours * 60;
        inputs.seconds.value = inputs.minutes.value * 60;
    };

    const convertMinutes = minutes => {
        inputs.hours.value = minutes / 60;
        inputs.seconds.value = minutes * 60;
        inputs.days.value = inputs.hours.value / 24;
    };

    const convertSeconds = seconds => {
        inputs.minutes.value = seconds / 60;
        inputs.hours.value = inputs.minutes.value / 60;
        inputs.days.value = inputs.hours.value / 24;
    };

}