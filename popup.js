document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("reject").addEventListener("click", closeMain);
    document.getElementById("accept").addEventListener("click", openSidebar);
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