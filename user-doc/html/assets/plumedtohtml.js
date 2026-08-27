var redpath="";
function showPath(eg,name,valfield,color) {
  var i; var y = document.getElementsByName(redpath);
  for (i=0; i < y.length; i++ ) { y[i].style.color=""; }
  var x = document.getElementsByName(name); redpath=name;
  for (i = 0; i < x.length; i++) { x[i].style.color=color; }
  var valid="value_details_".concat(eg);
  var valueField = document.getElementById(valid);
  var dataField = document.getElementById(valfield);
  valueField.innerHTML = dataField.innerHTML;
}
function toggleDisplay(name) {
  var short_div = document.getElementById(name + "_short");
  var long_div = document.getElementById(name + "_long");
  if( short_div.style.display === "none" ) {
      short_div.style.display = "block";
      long_div.style.display = "none";
  } else { 
      short_div.style.display = "none";
      long_div.style.display = "block";
  }
}
function openModal(name) {
  var modal = document.getElementById(name);
  modal.style.display = "block"; 
}
function closeModal(name) {
  var modal = document.getElementById(name);
  modal.style.display = "none";
}
window.onclick = function(event) {
  var elements = document.getElementsByClassName("plumedmodal");
  var i;
  for(i = 0; i<elements.length; ++i) {
      if (event.target == elements[i]) {
        elements[i].style.display = "none";
      }
  }
}
