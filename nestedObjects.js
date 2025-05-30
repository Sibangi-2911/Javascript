let Car = {
  brand:"BMW",
  model : "7 Series",
  color : "white",
  make : 2028,
  owner: {
    name : "Sibangi",
    age : 45,
  },
};
console.log("Owner of the car : ",Car.owner.name);
Car.owner.name = "Reena";
console.log("Owner of the car : ",Car.owner.name);