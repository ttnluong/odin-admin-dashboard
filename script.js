// Truncate text, ellipsis after whole word

const text = document.querySelectorAll(".truncate");
const textHeading = document.querySelectorAll(".truncate.activity-heading");

text.forEach(p => {
  p.innerHTML = p.textContent.replace(/[a-z0-9_]+/g, '<span>$&</span>');
 });

textHeading.forEach(p => {
  p.innerHTML = p.textContent.replace(/\b[a-z]*[A-Z][a-zA-Z0-9_]*\b/g, '<strong><span>$&</span></strong>');
});


 // Sidebar toggle button

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

