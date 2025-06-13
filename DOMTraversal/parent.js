let paragraph = document.getElementById("paragraph");
let parentNode = paragraph.parentNode;
console.log(parentNode);
let parentElement = paragraph.parentElement;
console.log(parentElement);

let textNode = document.getElementById("textNodeExample").firstChild;
console.log(textNode);
let parentNodetextNode = textNode.parentNode;
console.log(parentNodetextNode);
let parentElementtextNode = textNode.parentElement;
console.log(parentElementtextNode); 

let html = document.documentElement;
console.log(html.parentElement); // returns null
console.log(html.parentNode);

//print previous sibling
let divElement = document.getElementById("textNodeExample").parentNode;
let commentNode = divElement.previousSibling;
console.log(Node.COMMENT_NODE);
while(commentNode && commentNode.nodeType != Node.COMMENT_NODE){
  commentNode = commentNode.previousSibling;
}
console.log(commentNode);
console.log(commentNode.data);