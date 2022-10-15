const sidebar = document.createElement("div");
sidebar.innerHTML = `
<link rel="stylesheet" href="./toolbox.css">
<div class="draggable-toolbox">
        <button class="translate-all-img">
  <img src="icons/body-text.svg" alt="All-Text" width="32" height="32">></img>
</button> 
<button class="translate-some-img">
  <img src="icons/crop.svg" alt="Some-Text" width="32" height="32">></img>
</button>
<button class="zoom-in-img">
  <img src="icons/zoom-in.svg" alt="Zoom-in" width="32" height="32">></img>
</button>
<button class="zoom-out-img">
  <img src="icons/zoom-out.svg" alt="Zoom-out" width="32" height="32">></img>
</button>
<button class="download-img">
  <img src="icons/download.svg" alt="Download" width="32" height="32">></img>
</button>
</div>`;
document.body.appendChild(sidebar);