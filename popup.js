document.addEventListener('DOMContentLoaded', function() {
<<<<<<< HEAD
    var rejectElements = document.getElementsByClassName('.reject');
    for (i = 0; i < rejectElements.length; i++) {
        rejectElements[i].addEventListener("click", closeMain);
    }
    var acceptElements = document.getElementsByClassName(".accept");
    for (i = 0; i < rejectElements.length; i++) {
        rejectElements[i].addEventListener("click", openSidebar);
    }
=======
    document.getElementById("reject").addEventListener("click", closeMain);
    document.getElementById("accept").addEventListener("click", openSidebar);
>>>>>>> 6b5c3ee61515df0408115b91167b562063b65bf3
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
        files: ['content_script.js']
      });
    window.close();
}