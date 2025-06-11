function updateImageAttributes(){
  let imageElement = document.getElementById("exampleImage");

  let imgSrc = imageElement.getAttribute("src");
  let imgAlt = imageElement.getAttribute("alt");

  console.log(imgSrc);
  console.log(imgAlt);

  imageElement.setAttribute("src","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gmevents.ae%2Ffemale-placeholder%2F&psig=AOvVaw3fGAhBV0gmOS5I-qSknuTM&ust=1749742658272000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKikx7_Z6Y0DFQAAAAAdAAAAABAE");
  imageElement.setAttribute("alt","Updated placeholder image");

}