// How different components of window can be used
document.getElementById("showHref").addEventListener("click", function(){
  console.log("Current URL: ", window.location.href);
});

document.getElementById("showHostname").addEventListener("click", function(){
  console.log("Host Name: ", window.location.hostname);
});

document.getElementById("showPathname").addEventListener("click", function(){
  console.log("Path Name: ", window.location.pathname);
});

document.getElementById("showProtocol").addEventListener("click", function(){
  console.log("Protocol: ", window.location.protocol);
});

document.getElementById("goToSite").addEventListener("click", function(){
  window.location.assign("https://google.com");
});
console.log(window.location);