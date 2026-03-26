//Inheritance--- is the main pillar in OOPs
//one class can inherit/acquire the properties ,methods of another class
//The class which inherits the properties of other is known as subclass/derived class/child class
//The class whose properties are inherited is known as superclass/parent class

const Person = require("./basics8");
class Pet extends Person {
  get location() {
    return "BlueCross";
  }
  constructor(firstName, lastName) {
    //call the parent class constructor first--------- Mandatory step
    super(firstName, lastName);
  }
}
let pet = new Pet("Sam", "San");
console.log(pet.location);
pet.fullName();
