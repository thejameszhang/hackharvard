console.log("Toolbox.js loaded");
document.getElementById("all").addEventListener("click", parseAll);
document.getElementById("select").addEventListener("click", parseSelected);
document.getElementById("zoomIn").addEventListener("click", zoomIn);
document.getElementById("zoomOut").addEventListener("click", zoomOut);
document.getElementById("download").addEventListener("click", downloadText);
console.log("event listeners added");

function parseAll(element){
    const text = "placeholder from API call";
    openTextModal(text);
};
function parseSelected(element) {
    const text = window.getSelection().toString();
    openTextModal(text);
};
function zoomIn(element){};
function zoomOut(element){};
function downloadText(element){
    console.log("download clicked");
    const file = new File([window.getSelection().toString()], 'summary.txt', {
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
async function openTextModal(text) {
    document.getElementById("text").classList.remove("d-none");
    // need to transform text into the summary  
    const summary = await summarized(text);
    document.getElementById('textarea').value = summary;
}
async function summarized(text){
    const response = await fetch("http://127.0.0.1:5000/get_summary", {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            "text": text })
    });
    Promise.resolve(response.text()).then(data => {
        console.log(data);
        return data;
    });

}

//http://127.0.0.1:5000/get_summary 