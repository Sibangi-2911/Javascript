let jsonCar = `{
"brand": "BMW",
"model": "7Series",
"color": "blue",
"make": 2024,
"available": true
}`;
console.log(jsonCar);
console.log(typeof jsonCar);

//convert json to js object
const Car = JSON.parse(jsonCar);
console.log(Car);

//convert Js object to json
const newCar = JSON.stringify(Car);
console.log(newCar);
console.log(typeof newCar);