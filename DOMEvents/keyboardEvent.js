//Keyboard events
const inputField = document.getElementById("inputField");
inputField.addEventListener("keydown", function(event){
  console.log(`Key down : key-${event.key} , code:${event.code}`);
});

inputField.addEventListener("keyup", function(event){
  console.log(`keyUp: ${event.key}`);
  if(event.key==="Enter"){
    console.log("Enter pressed");
    alert("Command executed");
  }
});