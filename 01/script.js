console.log("Testing");
//var keyword
//c,c++,java all these are strongly typed languages
//js is weakly typed language
//var keyword is used to declare a variable
var age = 22;
console.log(age);
var num1=2;
var num2=3;
console.log(num1+num2);
var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;
console.log(fullName);

//let keyword
//let keyword is used to declare a block scope variable
let age1=22;
console.log(age1);
if(true){
  let age1=23;
  console.log(age1); //local scope let
  var age2=24;
}
console.log(age2); //global scope var
const age3=25;
console.log(age3); //local scope const