//Filter array method used
let array_nums = [1,2,3,54,5,6,7,8,9];
const array_filtered = array_nums.filter((nums)=>nums>3);
console.log(array_filtered);

const users1 = [
  {name:"Sibangi",age:23},
  {name:"Seetal",age:22},
  {name:"Monali", age:21},
];
const olderthan21 = users1.filter((user)=>user.age>21);
console.log(olderthan21);

//keep only odd numbers
const oddeven = [1,2,3,4,5,6,7,8,9,10];
const onlyodd = oddeven.filter((nums)=>nums%2!=0);
console.log(onlyodd);