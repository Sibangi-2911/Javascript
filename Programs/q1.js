//Write a program to check if a number is even or odd.

const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter a number: "));

if (number % 2 == 0) {
  console.log(number + " is even.");
} else {
  console.log(number + " is odd.");
}
