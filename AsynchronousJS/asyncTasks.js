setTimeout(renderImage, 10000);
console.log("Rendering started: ", new Date().getSeconds());
function renderImage(){
  console.log("Rendering image: ", new Date().getSeconds() );
}



function myDisplayer(value){
  console.log("Printing result: ", value);
}
function myCalculator(num1, num2, callback){
  let result = num1+num2;
  if(callback){
    setTimeout(()=> callback(result), 10000);
  }
  return result;
}
myCalculator(5,5, myDisplayer);