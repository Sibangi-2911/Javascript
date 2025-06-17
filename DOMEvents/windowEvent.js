window.addEventListener("load", function(){
  console.log("Window is fully loaded");
  alert("Window loaded");
});
window.addEventListener("resize", function(){
  console.log(`Resize window: ${window.innerWidth} x ${window.innerHeight}`);
});
window.addEventListener("scroll", function(){
  console.log("You are scrolling..");
});
window.addEventListener("beforeunload", function(){
  let confirmationMessage = "Are you sure you want to leave?";
  event.preventDefault();
  this.event.returnValue = confirmationMessage;
});