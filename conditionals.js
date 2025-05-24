const age = 18;
// Conditional Statements
if (age>=18){
  console.log("You are eligible to vote");
}
else if(age>=80){
  console.log("You are too old to vote");
}
else{
  console.log("No!! You can't vote");
}

//Ternary Operator
age>=18 ? console.log("Eligible to vote"): console.log("No You cannot vote.");

// Switch Case
choosen_option = 2;
switch(choosen_option) {
  case 1:
    console.log("Namaste");
    break;
  case 2:
    console.log("Hello");
    break;
  case 3:
    console.log("Bonjour");
    break;
  case 4:
    console.log("Hola");
    break;
  default:
    console.log("Invalid option");
    break;
}