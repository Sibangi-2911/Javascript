//change the text test
function myDisplayer(value){
  document.getElementById("demo").textContent = value;
}
function myFirst(){
  myDisplayer("Hello");
}
function mySecond(){
  myDisplayer("GoodByee");
}
myFirst();
mySecond();

//callback functions
function myCalculator(num1, num2, callback){
  let result = num1 +num2;
  if(callback){
    callback(result);
  }
  return result;
}
myCalculator(5,5,myDisplayer);

function filterNumbers(numbers, filter){
  const numArray = [];
  for(let number of numbers){
    if(filter(number)){
      numArray.push(number);
    }
  }
  return numArray;
}
function filterPositives(number){
  return number>=0;
}
function filterNegatives(number){
  return number<0;
}
const numbers = [2,3,4,-2,-7,-9];
console.log(filterNumbers(numbers, filterPositives));
console.log(filterNumbers(numbers,filterNegatives));