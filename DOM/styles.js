//add inline styles
function applyStyles(){
  let box1 = document.getElementById("box1");
  box1.style.backgroundColor = "green";
  box1.style.border = "red";
  box1.style.width = "200px";
  box1.style.height = "200px";

  console.log(box1.style);
}

//toggle or add classes
function toggleClass(){
  let box2 = document.getElementById("box2");
  box2.classList.toggle("highlight");
  box2.classList.toggle("large");

  console.log(box2.className);
}