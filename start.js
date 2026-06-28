console.log("Hello Java Script");

// const life = 100 -> Connot change data
let life = 100;
console.log(life);
// life = 100
life = 200;
console.log(life);
// life = 200
console.log("Hello", life);

const name = "Meng Lyhour";
const age = 20;
const info = name + age + 20;
// output is string type
console.log(info);

// Operation
const a = 10;
const b = 20;
const c = a - b;
console.log(c);

// Data Number, String
const num = 25;
const txt = "Hello";
// Boolean
const bo = true;
console.log(bo);

const health = 80;
const health2 = 200;
// Comparision Operator, > , < ,>= , <= ,==, !=console.log(health> health2)
if (health == 80) console.log("80% Health");
else if (health == 50) console.log("50% Health");
else console.log("Below 50% Health");
// Nested IF-Else

// Logical Operator &&, ||, !
const z = true;
const y = false;
console.log(z && y); // false
console.log(z || y); // true
console.log(!z); // false
console.log(!y); // true
// !! => Cancel
if (!!z) {
  console.log("No care");
} else {
  console.log("Doing main task");
}
const err = true;
if (!err) {
  console.log("Fixing in background");
} else {
  console.log("Doing main task when no error");
}

// Check type in java script
// result of typeof is string type if we want to compare we can compare with string
console.log(typeof err);
console.log(typeof health);
console.log(typeof txt);
let number = "25";
if (typeof number == "number") console.log("Num is number");
else console.log(typeof number);

// Covert Number
let n = 23423472424827482423424000000000000000000000;
console.log(n); // Covert to 2.3423472424827483e+43

let f = 347234.374348347345;
console.log(f); // Covert to 347234.37434834737
