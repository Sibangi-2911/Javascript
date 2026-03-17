// Function - block of code
//add 2 numbers
function add(a, b) {
  return a + b;
}

let sum = add(2, 3);
console.log(sum);

//Anonymous Function-->do not have name--- function expressions
let sumOfIntegers = function (c, d) {
  return c + d;
};
let sumOfNumbers = (c, d) => c + d; //much simpler way
console.log(sumOfIntegers(2, 3));
console.log(sumOfNumbers(2, 3));

//var keyword - scope is global, can't be accessed if declared inside function
//let - global level/block level {} - can be reinitialized
//const- same as let but can't be reinitialized
