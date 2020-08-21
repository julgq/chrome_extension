// Escuchar un mensaje que viene del contenido
chrome.runtime.onMessage.addListener((request, sender, resp) => {
    console.log('request', request);
    console.log('sender', sender);
    console.log('response', resp());
});


// Cuando un bookmark se mueva, entonces enviar un mensaje al frontend
chrome.bookmarks.onMoved.addListener(() => {
    console.log('Bookmar Moved');
    chrome.tabs.query({ active: true, currentWindow: true, }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, { name: 'Tomas' })
    });
});
