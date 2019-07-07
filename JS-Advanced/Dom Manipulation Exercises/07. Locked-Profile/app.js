
function lockedProfile() {
    let profiles = document.querySelectorAll('.profile');

    for (const profile of profiles) {
        let lockedRadioBtn = profile.querySelector('input[type="radio"]');
        let btn = profile.querySelector('button');
        let hiddenInfo = profile.querySelector('div');

        btn.addEventListener('click', () => {
            if (!lockedRadioBtn.checked) {
                switch (btn.textContent) {
                    case 'Show more':
                        hiddenInfo.style.display = 'block';
                        btn.textContent = 'Hide it';
                        break;
                    case 'Hide it':
                        hiddenInfo.style.display = 'none';
                        btn.textContent = 'Show more';
                        break;
                }
            }
        });
    }
}