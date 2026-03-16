//Sorting in array
let fruits = ["banana", "mango", "pomegranate", "apple"];
fruits.sort(); //ascending arder
console.log(fruits);
fruits.reverse(); //descending order
console.log(fruits);

console.log("************************************************************");

//Apply custom logic inside sorting
var scores1 = [12, 13, 3, 15, 11, 19, 17];
console.log(scores1.sort((a, b) => a - b)); // bubble sort in a recursive manner
console.log(scores1.reverse());
