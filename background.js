let isCaptionExtractionActive = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendRequest){
    if (request.action = 'updateButton')
    {
        isCaptionExtractionActive = request.active;

        const buttonText = isCaptionExtractionActive ? "Stop Extraction" : "Get Caption";
        chrome.browserAction.setTitle({ title: buttonText})
    }
})