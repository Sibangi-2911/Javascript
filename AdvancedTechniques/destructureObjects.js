//Destructuring of objects
let Car2 = {
  brand:"BMW",
  year:2028,
};
let {brand,year}=Car2;
console.log(brand);
console.log(year);

// another name can be given apart from the property name
let {brand:carBrand,year:carYear} = Car2;
console.log(carBrand);
console.log(carYear);

let {color="Red",owner="Sibangi"} = Car2; //these default values will be displayed until there are no values assigned
console.log(color);
console.log(owner);
//another name given
let {color:carColor="Red",owner:carOwner="Sibangi"} = Car2; //these default values will be displayed until there are no values assigned
console.log(carColor);
console.log(carOwner);

//Nested objects
let CarwithOwner = {
  brand:"BMW",
  year:2028,
  Owner:{
    name:"Sibangi",
    age:22,
  }
};
const {Owner:{name:Carownername,age:Carownerage}} = CarwithOwner;
console.log(Carownername);
console.log(Carownerage);

let Carwithowner = {
  brand:"BMW",
  year:2028,
  owner1:{
    name:"Sibangi",
    age:22,
  }
};
const {owner1,...cardetails} = Carwithowner;
console.log(owner1);
console.log(cardetails);