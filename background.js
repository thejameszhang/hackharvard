console.log("service worker started");
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content_script.js']
  });
  console.log("service worker running");
});