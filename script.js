// Truncate text, ellipsis after whole word
// document.addEventListener("DOMContentLoaded", () => {
// var text = document.querySelectorAll(".truncate").textContent;
// var text_wrapped = text.replace(/\w+/g, '<span>$&</span>'); //$& = placeholder matched text

// Printing the result
// document.querySelectorAll(".truncate").innerHTML = text_wrapped;
// });

const text = document.querySelectorAll(".truncate");

text.forEach(p => {
  p.innerHTML = p.textContent.replace(/[a-z0-9_]+/g, '<span>$&</span>');
 });


 // sidebar toggle button

const toggleButton = document.getElementById("sidebar-toggle");
const sidebar = document.querySelector(".sidebar-nav");

toggleButton.addEventListener("click", () => {
  const isActive = sidebar.classList.toggle("active");
  toggleButton.setAttribute("aria-expanded", String(isActive));
});

document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
    sidebar.classList.remove("active");
    toggleButton.setAttribute("aria-expanded", "false");
  }
});

