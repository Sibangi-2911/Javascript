document.getElementById("exampleForm").addEventListener("submit", function(event){
  console.log("Form was submitted");
  event.preventDefault();
  console.log("Own js code");
});

document.getElementById("textInput").addEventListener("input", function(){
  console.log("Text value: ", this.value);
});

document.getElementById("emailInput").addEventListener("change", function(){
  console.log("Email changed: ", this.value);
});

document.getElementById("passwordInput").addEventListener("focus", function(){
  console.log("Password focus");
});

document.getElementById("passwordInput").addEventListener("blur", function(){
  console.log("Password blur");
});

document.getElementById("checkboxInput").addEventListener("change", function(){
  console.log(this.checked ? "checked":"unchecked");
});

document.getElementById("fileInput").addEventListener("change", function(){
  console.log(this.files);
  console.log(this.files[0]);
  console.log(this.files[0].name);
});
