//selecting childnodes and children
let parentNodes = document.getElementById("parent");
let childNodes = parentNodes.childNodes;
console.log(childNodes);

let children = parentNodes.children;
console.log(children);
console.log(children[0], "firstCHILD");

let parent2Node = document.getElementById("parent2");
let childNode2 = parent2Node.childNodes;
console.log(childNode2);

let children2 = parent2Node.children;
console.log(children2);
console.log(children2[0]);