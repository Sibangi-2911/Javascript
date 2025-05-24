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