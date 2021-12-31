const container = document.querySelector('.container');
const insert = document.getElementById("insert");
const buttonDarkTheme = document.querySelector('div.buttonTheme');

window.addEventListener('keydown', (event) => {
    let eventKey = event.key == ' ' ? 'Space' : event.key;
    let eventKeyCode = event.keyCode;

    insert.innerHTML = `
       <div class="keyText">
           ${eventKeyCode}
        </div>
        <div class="key">
            <div> ${eventKey}</div>
            <small>event.key</small>
        </div>
        <div class="key">
            <div>${eventKeyCode}</div>
            <small>event.keyCode(deprecated)</small>
        </div>
        <div class="key">
            <div>${event.code}</div>
            <small>event.code</small>
        </div>
        <div class="key">
            <div>${event.location}</div>
            <small>event.location</small>
        </div>
   `
});

buttonDarkTheme.addEventListener('click', () => {
    container.classList.toggle('darkTheme');
});