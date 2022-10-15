// chrome.runtime.onConnect.addListener(function(port) {
//     port.onMessage.addListener(function(msg) {
//       port.postMessage({counter: msg.counter+1});
//     });
//   });
  
// chrome.runtime.onMessage.addListener(
// function(request, sender, sendResponse) {
//     sendResponse({counter: request.counter+1});
// });
const template = document.createElement('div');
template.innerHTML = "<div> Side Bar Here </div>";
document.body.appendChild(template);
