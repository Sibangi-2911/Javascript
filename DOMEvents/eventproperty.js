document.getElementById("exampleButton").addEventListener("click", function(event){
  console.log("event type: ",event.type); // property
  console.log("event target: ", event.target);
  console.log("event target tagname: ", event.target.tagName);
  console.log("event current target: ", event.currentTarget);
  console.log("event current target tagname: ", event.currentTarget.tagName);
  console.log("Event timestamp: ", event.timeStamp);
  console.log("Mouse X Position: ", event.clientX);
  console.log("Mouse Y Position: ", event.clientY);
  console.log(event);
});