// ALTERNATIVE SYNTAX FOR CREATING AN ARRAY
let numbers1 = new Array(12,14,56,34,67);
console.log(numbers1);
numbers1.push(30);
console.log(numbers1);

let newnumbers = numbers1;
numbers1.push(1);
console.log(newnumbers); // mutable
console.log(numbers1);

// avoid mutability by using spread operator
let newnumbers1 = [...numbers1];
numbers1.push(69);
console.log(numbers1);
console.log(newnumbers1);
numbers1.pop();
numbers1.pop();
console.log(numbers1);
console.log(newnumbers1);