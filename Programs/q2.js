//Write a program to reverse a string.

const prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");
let reversedString = str.split("").reverse().join("");
console.log(reversedString);
