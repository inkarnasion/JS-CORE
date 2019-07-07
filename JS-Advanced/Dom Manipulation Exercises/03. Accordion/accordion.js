function toggle() {
    let button = document.querySelector('.button');
    let extraDiv = document.getElementById('extra');

    switch (button.textContent) {
        case 'More':
            button.textContent = 'Less';
            extraDiv.style.display = 'block';
            break;
        default:
            button.textContent = 'More';
            extraDiv.style.display = 'none';
            break;
    }
}