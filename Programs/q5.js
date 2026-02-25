// Write a program to count occurrences of a word in a string.
const prompt = require("prompt-sync")();
let sentence = prompt("Enter a sentence: ");
let word = prompt("Enter word to count: ");

let words = sentence.toLowerCase().split(" ");
let count = 0;

for (let w of words) {
  if (w === word.toLowerCase()) {
    count++;
  }
}

console.log("Occurrences:", count);
