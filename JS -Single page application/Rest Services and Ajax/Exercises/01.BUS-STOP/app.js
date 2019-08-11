function getInfo() {
    let stopId = document.getElementById('stopId').value;
    let url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;

    fetch(url)
        .then((info) => info.json())
        .then((data) => {
            document.getElementById('stopName').textContent=data.name;

            document.getElementById('buses').innerHTML= '';

            let buses = Object.entries(data.buses);

            for (let [busNumber,busTime] of buses) {
                let li = document.createElement('li');
                li.textContent = `Bus ${busNumber} arrives in ${busTime} minutes`;
                document.getElementById('buses').appendChild(li);
            }
        })
        .catch(error => {
            document.getElementById('stopName').textContent = 'Error'
        });
    document.getElementById('stopId').value= '';

    }
