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

//select elements by tag name
let tags = document.getElementsByTagName("div");
console.log(tags);
console.log(tags.length);
console.log(tags[2]);

//converting html collection into array
let paragraphArray = Array.from(classes);
console.log(paragraphArray);
console.log(typeof paragraphArray);

