window.onload = () => {
    // Crear buton 
    const button = document.createElement('button');
    button.id = "darkModeButton";
    button.textContent = chrome.i18n.getMessage("enabledDarkModeText");

    // Crear input
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'darkSetting';

    // Agregar boton, input y texto.
    document.querySelector('#end').prepend(button, input, 'Auto Apply?');

    // Evento al dar click en el boton
    button.addEventListener('click', () => enableDarkMode());

    // Evento al dar click en el input check
    input.addEventListener('click', () => storageSetting());

    checkSetting();

}

function checkSetting() {
    chrome.storage.local.get(['enabled'], (result) => {
        console.log(result.enabled);
        const isEnabled = result.enabled;
        document.getElementById('darkSetting').checked = result.enabled;

        if (result.enabled) {
            enableDarkMode();
        }
    });
}
function storageSetting() {
    const isEnabled = document.getElementById('darkSetting').checked;
    const setting = {
        enabled: isEnabled
    };

    chrome.storage.local.set(setting, () => {
        console.log('stored', setting);
    });
}

function enableDarkMode() {
    console.log('Change color');
    document.getElementsByTagName('ytd-app')[0].style.backgroundColor = "black";
}