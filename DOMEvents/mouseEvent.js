//mouse events
const eventArea = document.getElementById("eventArea");
eventArea.addEventListener("mouseover", function(){
  console.log("Mouse over the area");
  this.style.backgroundColor = "lightblue";
});
eventArea.addEventListener("mouseout", function(){
  console.log("Back to normal after the mouse is removed");
  this.style.backgroundColor = "#f0f0f0";
});
eventArea.addEventListener("mousedown", function(){
  console.log("Mouse button down");
  this.style.backgroundColor = "lightgreen"; 
});
eventArea.addEventListener("mouseup", function(){
  console.log("Mouse button is up");
  this.style.backgroundColor = "red";
});
eventArea.addEventListener("click", function(){
  console.log("Area was clicked");
});