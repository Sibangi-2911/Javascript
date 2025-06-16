//this keyword
document.getElementById("exampleButton").addEventListener("click", function(event){
  console.log("this refers to: ",this);
  console.log("Id of element: ",this.id);
  console.log("TextContent of element: ",this.textContent);
  console.log("ClassName of element: ",this.className);
  console.log("ClassList of element: ",this.classList);
});