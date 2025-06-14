//selecting sibling
let firstSibling = document.getElementById("first-sibling");
let nextNode = firstSibling.nextSibling;
let previousNode = firstSibling.previousSibling;
console.log(nextNode);
console.log(previousNode);

let nextElement = firstSibling.nextElementSibling;
let previousElement = firstSibling.previousElementSibling;
console.log(nextElement);
console.log(previousElement);