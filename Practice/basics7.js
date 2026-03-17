//object - collection of properties(key-value pairs)

let person = {
  firstName: "Sibangi",
  lastName: "Boxipatro",
  age: 24,
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};
console.log(person.fullName());
console.log(person.firstName);
console.log(person.lastName);
console.log(person.firstName + " " + person.lastName);
console.log(person["lastName"]); //Access property values like array

//change property values
person.firstName = "Sibu";
console.log(person.firstName);

//add new property
person.gender = "female";
console.log(person);

//delete property
delete person.gender;
console.log(person);

//check if property exists in the object--- will return true or false
console.log("gender" in person);

//Print the values of all objects using for loop
for (let key in person) {
  console.log(person[key]);
}
