// Constructor function
function Car2(brand,model,year,color){
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.color = color;
}
let car1 = new Car2("BMW","7-Series",2024,"White");
let car2 = new Car2("Audi","A6",2021,"Black");
console.log(car1);
console.log(car2);

function Person(first_name,last_name,age,isMember=false){
  this.first_name=first_name;
  this.last_name=last_name;
  this.age=age;
  this.isMember=isMember;
  this.getFullName = function(){
    return `${first_name} ${last_name}`;
  };
}
let person1 = new Person("Sibangi","Boxipatro",22);
let person2 = new Person("Seetal","Panda",22,true);
console.log(person1);
console.log(person2);
console.log(person1.getFullName());
console.log(person2.getFullName());