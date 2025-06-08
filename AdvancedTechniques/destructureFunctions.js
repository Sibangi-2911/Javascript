//Destructuring the function parameters
let Car3 = {
  brand:"BMW",
  year:2028,
  model:"7Series",
};
function printDetails({brand:carBrand,year:carYear,model:carModel}){
  console.log(`Brand: ${carBrand}, Year: ${carYear}, Model: ${carModel}`);
}
printDetails(Car3);

let Scores = [90,91,95,67,65,60,45,61];
function printScores([first,second,third,...restScores]){
  console.log(`1st:${first},2nd:${second},3rd:${third},restScores:${restScores}`);
}
printScores(Scores);