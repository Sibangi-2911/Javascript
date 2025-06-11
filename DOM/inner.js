//Modify content by using innerhtml
let contentmodify = document.getElementById("content");
console.log(contentmodify.textContent);
contentmodify.innerHTML = "<p>This is the modified content using inner html.</p>";
console.log(contentmodify.textContent);