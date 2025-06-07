//use of spread operator in function calls
function add(a,b){
  return a+b;
}
const number = [1,2];
let result = add(...number);
console.log(result);

function multiply(a,b,c,d){
  return a*b*c*d;
}
const number2 = [3,4];
let result2 = (multiply(...number,...number2));
console.log(result2);