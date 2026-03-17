//String & it's methods
let day = "tuesday ";
console.log(day.length); // length of string

console.log("************************************************************");

//get the substring
let subDay = day.slice(0, 4);
console.log(subDay);

console.log("************************************************************");

//get the particular index
console.log(subDay[0]);

console.log("************************************************************");

//split to get 2 strings - js inbuilt keeps it in an array
let splitDay = day.split("s");
console.log(splitDay[1].length);
console.log(splitDay[1].trim().length);
console.log(splitDay[0]);

console.log("************************************************************");

//Difference between two strings
let date = "23";
let nextDate = "27";
let diff = parseInt(nextDate) - parseInt(date);
console.log(diff);
diff.toString(); //convert back to string

console.log("************************************************************");

//Concatenate two strings - using + operator
let newQuote = day + "is funday day";
console.log(newQuote);
let val = newQuote.indexOf("day", 5); // where exactly the charcater is starting or present
console.log(val);

console.log("************************************************************");

//find the number of occurances of a word using indexof and while loop
let count = 0;
val = newQuote.indexOf("day");
while (val != -1) {
  count++;
  val = newQuote.indexOf("day", val + 1);
}
console.log(count);
