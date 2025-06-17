document.getElementById("btnOpen").addEventListener("click", function(){
  window.open("https://google.com", "_blank");
  console.log(window.document);
  console.log(window);
});

document.getElementById("btnShowProps").addEventListener("click", function(){
  alert(`
    Screen Width: ${window.screen.width}px
    Screen Height: ${window.screen.height}px
    Screen Available Width: ${window.screen.availWidth}px
    Screen Available Height: ${window.screen.availHeight}px
    Color Depth: ${screen.colorDepth}bits
    Pixel Depth: ${screen.pixelDepth}bits
    `);
});