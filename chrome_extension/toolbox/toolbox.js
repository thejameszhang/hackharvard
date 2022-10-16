document.getElementById("all").addEventListener("click", parseAll);
document.getElementById("select").addEventListener("click", parseSelected);
document.getElementById("zoomIn").addEventListener("click", zoomIn);
document.getElementById("zoomOut").addEventListener("click", zoomOut);
document.getElementById("download").addEventListener("click", downloadText);
var summaries = ["", "", ""];
var index = 0;
var maxIndex = 2;
function parseAll(element){
    const text = document.body.innerText;
    index = 0;
    openTextModal(text);
};
function parseSelected(element) {
    index = 0;
    const text = window.getSelection().toString();
    openTextModal(text);
};
function zoomIn(element){
    if (index > 0){
        index--;
    }
    document.getElementById('textarea').value = summaries[index];
};
function zoomOut(element){
    if (index < maxIndex){
        index++;
    }
    document.getElementById('textarea').value = summaries[index];
};
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
    for (let i = 0; i < 3; i++) {
        const response = await fetch("http://127.0.0.1:5000/get_summary", {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                "text": text ,
                "size":i})
        });

        Promise.resolve(response.text()).then(data => {
            summaries[i] = format(data);
            
        });
        
        
    }
    document.getElementById('textarea').value = summaries[index];
    console.log(summaries);

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