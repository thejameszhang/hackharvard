document.addEventListener('DOMContentLoaded', function() {
    var rejectElements = document.getElementsByClassName('.reject');
    for (i = 0; i < rejectElements.length; i++) {
        rejectElements[i].addEventListener("click", closeMain);
    }
    var acceptElements = document.getElementsByClassName(".accept");
    for (i = 0; i < rejectElements.length; i++) {
        rejectElements[i].addEventListener("click", openSidebar);
    }

    document.getElementsByClassName("reject").addEventListener("click", closeMain);
    document.getElementsByClassName("accept").addEventListener("click", openSidebar);
  });
function closeMain(element) {
    window.close();
};
function sendMessage(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
          console.log("sent Hello from popup");
        });
      });
}
function openSidebar(element) {
    // send message to content script
    // window.close();
};


