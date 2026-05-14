// // Truncate text, ellipsis after whole word
// document.addEventListener("DOMContentLoaded", () => {
// var text = document.querySelectorAll(".truncate").textContent;
// var text_wrapped = text.replace(/\w+/g, '<span>$&</span>'); //$& = placeholder matched text

// // Printing the result
// document.querySelectorAll(".truncate").innerHTML = text_wrapped;
// });


document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".truncate");
  console.log("Found elements:", elements);

  elements.forEach(p => {
    console.log("Text:", p.textContent);
    p.innerHTML = p.textContent.replace(/\w+/g, '<span>$&</span>');
    console.log("New HTML:", p.innerHTML);
  });
});