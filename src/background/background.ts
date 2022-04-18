chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log('Test background: ' + request.toString());
    sendResponse({"response": "Response item"});
});

// chrome.action.onClicked.addListener(() => {
//     chrome.tabs.create({
//         url: chrome.runtime.getURL("popup.html"),
//     });
// });
