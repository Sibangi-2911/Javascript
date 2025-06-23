//cleaner code with fetchApi . This is specifically for promise
function onLoad(){
  fetch("https://jsonplaceholder.typicode.com/posts/1").then((response)=>{
    if(!response.ok){
      throw new Error("NETWORK RESPONSE WAS NOT OK");
    }
    return response.json();
  })
  .then((data)=>{
    console.log(data);
  })
  .catch((error)=>{
    console.log(error);
  })
}
onLoad();