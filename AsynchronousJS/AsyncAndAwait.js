//using async and await for a promise to resolve
async function loadData() {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  } catch(error){
    console.log("Elegantly handle the error");
    console.log(error);
  }
};
loadData();