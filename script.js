// Truncate text, ellipsis after whole word
// document.addEventListener("DOMContentLoaded", () => {
// var text = document.querySelectorAll(".truncate").textContent;
// var text_wrapped = text.replace(/\w+/g, '<span>$&</span>'); //$& = placeholder matched text

// Printing the result
// document.querySelectorAll(".truncate").innerHTML = text_wrapped;
// });

const text = document.querySelectorAll(".truncate");

text.forEach(p => {
  p.innerHTML = p.textContent.replace(/\w+/g, '<span>$&</span>');
 });


 // sidebar toggle button

//  function openSidebar() {
//   document.getElementById("sidebar").style.marginLeft = "0px";
// }

// function closeSidebar() {
//   document.getElementById("sidebar").style.display = "none";
// }

// function openSidebar() {
//   var element = document.getElementById("sidebar");
//   element.classList.add("open");
// }

const toggleButton = document.querySelector('#sidebar-toggle');

toggleButton.addEventListener('click', () => {
  var el = document.getElementById("sidebar");
  el.style.marginLeft = "0px";
})

document.body.addEventListener('click', () => {
  document.getElementById("sidebar").style.marginLeft = "-200px";
})


