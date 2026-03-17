//Classes
//exported the file
module.exports = class Person {
  age = 25;
  // Propert getters
  get location() {
    return "Canada";
  }

  //Constructor is a method which executes by default when you create object of the class
  //using constructor keyword and mention the instance variables
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  //Methods
  fullName() {
    console.log(this.firstName + " " + this.lastName);
  }
};
//created object to access properties of class
// let person = new Person("Sibangi", "Boxipatro"); //values are sent in the runtime for the constructor
// let person1 = new Person("Seetal", "Panda");
// console.log(person.age);
// console.log(person.location);
// console.log(person.fullName());
// console.log(person1.fullName());
