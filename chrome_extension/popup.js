document.addEventListener('DOMContentLoaded', function() {
    // Call the appropriate function when a button is clicked.
    document.getElementById("reject").addEventListener("click", closeMain);
    document.getElementById("accept").addEventListener("click", openSidebar);
  });

function closeMain(element) {
    window.close();
};    

async function getCurrentTab() {
    /*
    This function gets the current tab and only the current tab
    because of the below query options.
    Args:
    Returns:
        A promise, `tabs.Tab` instance or `undefined`  
    */
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

async function openSidebar(element) {
    /*
    This functions opens the toolbox sidebar and closes the default popup.
    */
    // Send a message to content script.
    console.log("open sidebar");
    // Wait for getCurrentTab() to return the current tab.
    const tab = await getCurrentTab();
    // Inject this javascript functionality into all other js files.
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content_script.js','toolbox/toolbox.js', 'text.js']
      }).then(() => comsole.log("javascript injected"));
    // Once the sidebar is open, we can close default popup.
    window.close();
}