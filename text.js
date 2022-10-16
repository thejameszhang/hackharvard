const text = document.createElement("div");
text.setAttribute('id', 'text')
text.innerHTML = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<div class="form-group fixed-top p-3 order-2 float-right" style="width:20%; left:70%; top:7%; z-index:2000;">
  <label for="exampleFormControlTextarea3"></label>
  <textarea readonly class="form-control" id="textarea" rows="7"></textarea>
</div>`
text.classList.add("d-none");
document.body.appendChild(text).style.display = "absolute";