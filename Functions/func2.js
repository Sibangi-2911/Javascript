// Methods- When functions defined inside object (Do not use arrow functions in methods)
let Car = {
  brand:"BMW",
  year:2024,
  model:"7-Series",
  describeCar: function(){
    return `This car is ${this.year} ${this.brand} ${this.model}`;
  },
};
console.log(Car.describeCar());

//Calculator example
let Calculator = {
  add(num1,num2){
    return num1+num2;
  },
  subtract(num1,num2){
    return num1-num2;
  },
  multiply(num1,num2){
    return num1*num2;
  },
};
console.log(Calculator.add(5,2));
console.log(Calculator.multiply(5,2));
console.log(Calculator.subtract(5,2));