document.getElementById("all").addEventListener("click", parseAll);
document.getElementById("select").addEventListener("click", parseSelected);
document.getElementById("zoomIn").addEventListener("click", zoomIn);
document.getElementById("zoomOut").addEventListener("click", zoomOut);
document.getElementById("download").addEventListener("click", downloadText);

function parseAll(element){
    const text = document.body.innerText;
    openTextModal(text);
};
function parseSelected(element) {
    const text = window.getSelection().toString();
    openTextModal(text);
};
function zoomIn(element){};
function zoomOut(element){};
function downloadText(element){
    const text = document.getElementById('textarea').value
    const file = new File([text], 'summary.txt', {
    type: 'text/plain',
    });
  
    const link = document.createElement('a');
    const url = URL.createObjectURL(file);
  
    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
  
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
};
async function openTextModal(text) {
    document.getElementById("text").classList.remove("d-none");
    // need to transform text into the summary  
    try {
        showSpinner();
        const summary = await summarized(text);
      } catch (err) {
        console.error(err);
      } finally {
        hideSpinner();
      }
    
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
        document.getElementById('textarea').value = format(data);
        return format(data);
    });

}
function showSpinner() {
    document.getElementById('loader').style.display = 'flex';
}
  
function hideSpinner() {
    document.getElementById('loader').style.display = 'none';
}
// formats our data
function format(text){
    var res = "";
    var pass = false;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === "<"){
            pass = true;
        }
        else if (!pass){
            res += text[i] ;
        }
        else if (text[i] === ">"){
            pass = false;
        }
      }
    return res;
}
//http://127.0.0.1:5000/get_summary 