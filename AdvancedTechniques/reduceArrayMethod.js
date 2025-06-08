//Reduce Array method used
const numbers1 = [1,2,3,4,5,6,7,8,10];
const sum_value = numbers1.reduce((accumulator,currentValue)=>{
  return currentValue+accumulator;
},0);
console.log(sum_value);


const items=[
  {name:"Apple",type:"fruit",quantity:10},
  {name:"Banana",type:"fruit",quantity:5},
  {name:"Carrot",type:"vegetable",quantity:8},
];
const inventory = items.reduce((accumulator,item)=>{
  accumulator[item.type] = (accumulator[item.type] || 0) + item.quantity;
  return accumulator;
}, {})
console.log(inventory);