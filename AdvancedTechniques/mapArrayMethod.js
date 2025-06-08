//Map array method
let array_num = [1,2,3,4,5,6];
let squares = array_num.map((number,index)=>number*number);
console.log(squares);

const users = [
  {name:"Sibangi",age:23},
  {name:"Seetal",age:22},
  {name:"Monali", age:21},
];
const userwithBirthyear = users.map((user)=>({
  ...user,
  birthYear : new Date().getFullYear()-user.age,
}));
console.log(userwithBirthyear);