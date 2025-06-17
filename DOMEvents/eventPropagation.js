const outer = document.getElementById("outer");
const inner = document.getElementById("inner");
const middle = document.getElementById("middle");

function logEvent(event){
  console.log(`${event.currentTarget.id}, ${event.type} handled at ${event.eventPhase}`);

  if(event.currentTarget.id == 'middle'){
    event.stopPropagation();
    console.log("Event was stopped in the middle.")
  }
}

//capturing phase
outer.addEventListener("click",logEvent,true);
inner.addEventListener("click",logEvent,true);
middle.addEventListener("click",logEvent,true);

//Bubbling phase
outer.addEventListener("click",logEvent);
inner.addEventListener("click",logEvent);
middle.addEventListener("click",logEvent);