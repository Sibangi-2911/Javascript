//spread bjects for objects
let Car ={
  brand:"BMW",
  model : "7 Series",
  color : "white",
  make : 2028,
};
//TO COPY AND UPDATE A PROPERTY
let updatedCar = {...Car, color:"Black",make:2027};
console.log(Car);
console.log(updatedCar);

let Owner = {
  name:"Sibangi",
  age:22,
  brand:"Mercedes",
  make:2028,
};
//Combine two objects
let combination = {...Car,...Owner};
console.log(combination);

let combine = {...Car, owner:{...Owner}};
console.log(combine);