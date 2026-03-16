const flag = true;

//conditionals
if (!flag) {
  console.log("Condition Satisfied");
} else {
  console.log(flag);
  console.log("Condition not satisfied");
}
console.log(
  "**********************************************************************",
);
//While loop - evaluate any kind of expression for a condition
let i = 0;
while (i > 10) {
  i++;
  console.log(i);
}

let required = true;
while (required) {
  console.log(required);
  required = false;
}
console.log(
  "**********************************************************************",
);
//Do-while loop
do {
  i++;
} while (i > 10);
console.log(i);

console.log(
  "**********************************************************************",
);
//for loop - use it when you know how many times you need to run it
for (let k = 0; k <= 10; k++) {
  console.log(k);
}

console.log(
  "**********************************************************************",
);
//Example - Get the first 3 numbers which are common multiple and 2 and 5 from 1 t0 100
let n = 0;
for (let m = 1; m <= 100; m++) {
  if (m % 2 == 0 && m % 5 == 0) {
    n++;
    console.log(m);
  }
  if (n == 3) {
    break;
  }
}
