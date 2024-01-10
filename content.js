let isCaptionExtractionActive = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.action === 'toggleCaptionExtraction'){
        isCaptionExtractionActive = !isCaptionExtractionActive;

        if(isCaptionExtractionActive){
            console.log('Fetching Captions...');
            sendResponse(true)
        } else {
            console.log('Caption extraction stopped.')
            sendResponse(false)
        }
        chrome.runtime.sendMessage({action: 'updateButton', active: isCaptionExtractionActive});
    }
})