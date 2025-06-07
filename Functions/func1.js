function addNumbers(num1, num2){
  return num1+num2;
}
let result = addNumbers(5,10);
console.log(result);

function add(){
  console.log("Add Body");
}
add();

//Function expressions - functions assigned to a variable. These are not hoisted.
const saygoodbye = function(name){
  console.log(`Goodbye ${name}`);
}
saygoodbye("Sibangi");

//Arrow functions - don not have this context and not hoisted
const add1 = (a,b)=>{
  return a+b;
}
console.log(add1(10,20));

const multi = (a,b)=>a*b;
console.log(multi(8,2));

//default parameters
function orderCoffee(size="medium",type="black"){
  console.log(`You have oredered a ${size} sized ${type} coffee.`);
}
orderCoffee();
orderCoffee("small");
orderCoffee("small","latte");