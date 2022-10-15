console.log("Toolbox.js loaded");
document.getElementById("all").addEventListener("click", parseAll);
document.getElementById("select").addEventListener("click", parseSelected);
document.getElementById("zoomIn").addEventListener("click", zoomIn);
document.getElementById("zoomOut").addEventListener("click", zoomOut);
document.getElementById("download").addEventListener("click", downloadText);
console.log("event listeners added");

function parseAll(element){};
function parseSelected(element) {
    console.log(window.getSelection().toString());
};
function zoomIn(element){};
function zoomOut(element){};
function downloadText(element){
    console.log("download clicked");
    const file = new File([window.getSelection().toString()], 'new-note.txt', {
    type: 'text/plain',
    });
  
    const link = document.createElement('a')
    const url = URL.createObjectURL(file)
  
    link.href = url
    link.download = file.name
    document.body.appendChild(link)
    link.click()
  
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
};
