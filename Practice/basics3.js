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
