console.log('Popup script loaded');

document.addEventListener("DOMContentLoaded", function () {
  console.log('DOM content loaded');

  let button = document.getElementById("action_btn");
  if(button){
    console.log('Button found');
    button.addEventListener("click", function (){
      console.log('Button clicked');
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        var activeTab = tabs[0];
        if(activeTab){
          console.log('Sending message to content script');
          chrome.tabs.sendMessage(activeTab.id, {
            action: "toggleCaptionExtraction",
          })
        }
        else {
          console.log('No active tab found');
        }
      })
    })
  } else {
    console.log('Button not found');
  }
});