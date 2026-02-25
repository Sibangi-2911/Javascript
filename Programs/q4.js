//Write a function to find the largest number in an array.
const prompt = require("prompt-sync")();
let input = prompt("Enter numbers separated by comma: ");
let arr = input.split(",").map(Number);

function findLargest(array) {
  let largest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}

console.log("Largest Number : ", findLargest(arr));
