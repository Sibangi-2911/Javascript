//use of spread operator in function declaration
function sum(...args){
  console.log(args);
  let total =0;
  for(let arg of args){
    total+=arg;
  }
  return total;
}
console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6));

function multiply(multiplier, ...numbers){
  console.log(numbers);
  let result =[];
  for(let num of numbers){
    result.push(num*multiplier);
  }
  return result;
}
console.log(multiply(2,2,3,4,5,6));
