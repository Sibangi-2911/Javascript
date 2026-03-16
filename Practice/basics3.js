//Array - collection of elements
var marks = Array(6); // declaration

var marks = new Array(20, 40, 30, 12, 37, 100); //declaring by creating object and mentioning what values to store

var marks = [20, 30, 40, 12, 37, 24]; // another way of declaring

console.log(marks[2]); // acessing value inside array using index
console.log("************************************************************");

//Create sub array from main array
subMarks = marks.slice(2, 5); //5 is not included 2,3,4
console.log(subMarks);
console.log("************************************************************");

marks[2] = 45; //assigning value 40--->45
console.log(marks[2]);
console.log("************************************************************");

console.log(marks.length); // length of the array

console.log("************************************************************");

//Append new element to array
marks.push(38);
console.log(marks);
console.log("************************************************************");

//Delete last element from array
marks.pop();
console.log(marks);

console.log("************************************************************");

//Add element at the beginning
marks.unshift(38);
console.log(marks);

console.log("************************************************************");

//Get the index of the particular element
console.log(marks.indexOf(100));

console.log("************************************************************");

//Check whether the element is present or not in an array
console.log(marks.includes(120));

console.log("************************************************************");

//Print all elements of an array using for loop
for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}
console.log("************************************************************");

//Sum of all the elements in an array
let sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}
console.log(sum);

console.log("************************************************************");

//Array Functions - reduce filter map
//Reduce - to get single value from an array- iterate or update values
let totalSum = marks.reduce(
  (AccumulartorsSum, mark) => AccumulartorsSum + mark,
  0,
);
console.log(totalSum);
console.log("************************************************************");

//Get only even numbers from the array - create the new even number array
var scores = [12, 13, 14, 15, 16];
var evenScores = [];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] % 2 == 0) {
    evenScores.push(scores[i]);
  }
}
console.log(evenScores);
//Alternate way is filter method to filter an array - condition to be satisfied
let newFilterEvenScores = scores.filter((score) => score % 2 == 0);
console.log(newFilterEvenScores);

console.log("************************************************************");

//Map - to create a new array by performing some operations on the existing array(from original value mapping to new values)
//Create new array with even number of scores and multiply each value with 3
let mappedArray = newFilterEvenScores.map((score) => score * 3);
console.log(mappedArray);

console.log("************************************************************");

//Chaining- to avoid such big code
var scores1 = [12, 13, 14, 15, 16, 17, 18];
let sumValue = scores1
  .filter((score) => score % 2 == 0)
  .map((score) => score * 3)
  .reduce((sum, val) => sum + val, 0);
console.log(sumValue);
