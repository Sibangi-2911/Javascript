let string12 = "10";
let num = 10;
console.log("Equal == : ",string12 == num); //liberal equality
console.log("Equal === : ", string12 === num);//strict equality that includes type also

console.log(string12!=num); // liberal inequality
console.log(string12!==num); // strict inequality

//Logical And
console.log(string12>8 && num<12 && num===10);
console.log(string12>8 && num>12 && num===10);

//logical OR
console.log(string12>8 || num>12 || num!==10);

//Nullish Coalescing - checks whether the value is null or undefined
let name = null;
console.log(name ?? "Default value");

console.log(num ?? 15);

//Null assignment
let x1 = null;
console.log(x1);
x1 ??= 30;
console.log(x1);
