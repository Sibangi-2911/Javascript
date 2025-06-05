//Combine arrays using spraed operator
let numbers = [1,2,3];
let more_numbers = [4,5,6];
let combined_numbers = [...numbers,...more_numbers];
console.log(combined_numbers);

let fruits = ["Apple","Banana","Mango"];
let added_fruits = ["Grapes",...fruits,"Pineapple"];
console.log(added_fruits);

let nestedArray = [[1,2],[3,4]];
let copiedArray = [];
for (array of nestedArray){
  copiedArray.push([...array]);
}
console.log(nestedArray);
console.log(copiedArray);
nestedArray[0][0] =99;
console.log(nestedArray);
console.log(copiedArray);
