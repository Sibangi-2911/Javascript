//for loop
let candies = 10;
for(let i=1;i<=candies;i++){
  console.log(`Sticker is applied to candy ${i} `);
}

let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];
for(let row =0;row<matrix.length;row++){
  console.log(matrix[row]);
}
for(let row =0;row<matrix.length;row++){
  for(let col=0;col<matrix[row].length;col++){
    console.log("Matrix value: ", matrix[row][col]);
  }
}

//for in loop
let fruit = ['Apple','Banana','Mango','Pineapple','Strawberry','Custard Apple'];
for(let index in fruits){
  console.log(index);
  console.log(fruit[index]);
}

let Car1 = {
  brand:"BMW",
  model : "7 Series",
  color : "white",
  make : 2028,
  owner: {
    name : "Sibangi",
    age : 45,
  },
};
for(let property in Car1){
  console.log(`PROPERTY: ${property}, VALUE: ${Car1[property]}`);
}

//for-of loop
let fruit1 = ['Apple','Banana','Mango','Pineapple','Strawberry','Custard Apple'];
for(let fruit of fruit1){
  console.log(fruit);
}
let word = "Javascript";
for(let letter of word){
  console.log(letter.toUpperCase());
}