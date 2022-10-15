document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("reject").addEventListener("click", closeMain);
    document.getElementById("accept").addEventListener("click", openSidebar);
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


