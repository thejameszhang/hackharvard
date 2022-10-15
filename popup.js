document.addEventListener('DOMContentLoaded', function() {
    var rejectElements = document.getElementsByClassName('.reject');
    for (i = 0; i < rejectElements.length; i++) {
        rejectElements[i].addEventListener("click", closeMain);
    }
    var acceptElements = document.getElementsByClassName(".accept");
    for (i = 0; i < rejectElements.length; i++) {
        rejectElements[i].addEventListener("click", openSidebar);
    }
  });
function closeMain(element) {
    window.close();
};
async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }
async function openSidebar(element) {
    // send message to content script
    console.log("open sidebar");
    const tab = await getCurrentTab();
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content_script.js', 'toolbox/toolbox.js']
      });
    window.close();
}