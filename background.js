chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: "accept" },
      files: ['content-script.js']
    });
  });