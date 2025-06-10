//SELECTING DOM ELEMENTS USING SELECTORS

//Select element with id
let headings = document.getElementById("main-title");
console.log(headings);
console.log(headings.textContent);

//select elements by class
let classes = document.getElementsByClassName("content");
console.log(classes);
console.log(classes.length);
console.log(classes[0]);