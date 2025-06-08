// Destructure the arrays
let Fruits = ["Apple","Banana","Pineapple"];
const [firstFruit,secondFruit,thirdFruit]=Fruits;
console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);

let Numbers = [1,2,3,4,5,6,7,8];
const [firstNumber, ,ThirdNumber, ,FourthNumber,...restNumbers] = Numbers;
console.log(firstNumber);
console.log(ThirdNumber);
console.log(restNumbers);

const NestedArray = [1,2,[3,4],5,6];
const[first,second,[third,fourth],...rest] = NestedArray;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(rest);

