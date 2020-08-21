window.document.onload = () => {
    testMessage();
};

// Enviar a Background cuando carge el sitio web.
function testMessage() {
    console.log('test message');
    chrome.runtime.sendMessage({
        payload: 'Hello from a content'
    }, () => console.log(2 + 2));
}

// Escuchar un mensaje que viene del backend
chrome.runtime.onMessage.addListener((request, sender) => {
    console.log('request', request);
    console.log('sender', sender);

});
