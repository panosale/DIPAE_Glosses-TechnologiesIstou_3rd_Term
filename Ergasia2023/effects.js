var id = null;
function myMove() {
  var elem = document.getElementById("div_fieldsArea");
  var pos = 800;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.left = pos + 'px'; 
    }
  }
//   id = null;
}
