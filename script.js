console.log("This is Hello from external js file");

// Datatypes in JavaScript
//Numbers
let num1 = 3.145;
let num2 = 10;
console.log(num1+num2); // Output: 13.145

//Strings
let str = "Hello!!!";
let str1 = "Sibangi";
console.log(str+ " "+str1); // Output: Hello!!! Sibangi

//boolean
let isLoggedIn = true;
let isLoggedOut = false;
console.log(isLoggedIn);
console.log(isLoggedOut);
console.log(typeof(isLoggedIn));
console.log(typeof(isLoggedOut));

//null
let emptyValue = null;
console.log(emptyValue); // Output: null

//undefined
let notDefined;
console.log(notDefined); // Output: undefined

//objects
let person1 = {
  name:"Sibangi",
  age:22,
  class:"Btech",
  isStudent:true,
  address:{
    city:"Kolkata",
    state:"West Bengal",
  }
}
let person2 ={
  name:"Seetal",
  age:22,
  class:"Btech",
  isStudent:true,
  address:{
    city:"Kolkata",
    state:"West Bengal",
  }
}
console.log(person1);
console.log(person2);
console.log(person1.name);
console.log(person2.address.city);

console.log('123'* 123);
console.log('123' + 123); // Output: 123123
console.log('123' - 123); // Output: 0
console.log('123' + 123 + 123); // Output: 123123123
console.log(typeof('123' + 123));
console.log(typeof('123'* 123)); // Output: number
// x,vxzv

// Mutiline String
let multi = "This is a \n" + "multiline string.";
console.log(multi)

let template_literal = `This is a 
    multiline string`;
console.log(template_literal)

let first_name = "Sibangi"
let greeting = 'Hello'
console.log(`${greeting} ${first_name}`)

let x = 10;
let y = 20;
console.log(`The sum of ${x} and ${y} is ${x+y}.`)

//BigInt
let max_integer = Number.MAX_SAFE_INTEGER;
console.log(max_integer)
console.log(typeof max_integer)
console.log(max_integer+2)
console.log(max_integer+100)

let big_integer = BigInt(max_integer)
console.log(big_integer)
console.log(typeof big_integer)
console.log(big_integer+2n)
console.log(big_integer+1000n)

//Symbol primitive type used to give unique value
let symbol1 = Symbol();
let symbol2 = Symbol();
console.log(symbol1==symbol2);
console.log(symbol1);
console.log(symbol2);