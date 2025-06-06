let car = {
  brand:"BMW",
  model : "7 Series",
  color : "white",
  make : 2028,
  "car-owner": "Sibangi",
};
console.log(car);
console.log(car["brand"]);
console.log(car.model);
console.log(car["car-owner"])


car.color = "black";
console.log(car["color"]);

//constructor function- another way to create object
let audi = new Object();
console.log(audi);
audi.brand = "Audi";
audi.color = "red";
audi.oWner = "Sibangi";
console.log(audi);

//spread operator for avoiding mutability
let newCar = audi;
newCar.color = "white";
console.log(newCar.color);
console.log(audi.color); // here also color changes to white

let carCopy = {...audi};
carCopy.color="pink";
console.log(carCopy.color);
console.log(audi.color); // still remains white no change