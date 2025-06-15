function handleInlineClick(){
  alert("Inline handler");
}

document.getElementById("onEventButton").onclick = function(){
  alert("On-event handler");
}

document.getElementById("addEventListenerButton").addEventListener("click", ()=>{
  alert("AddEventListener!! handler");
});

document.getElementById("addEventListenerButton").addEventListener("click", ()=>{
  console.log("Second event ");
});