// const isEven = require("is-even");
// console.log(isEven("4"));

// import { evaluate } from "mathjs";

// console.log(evaluate("2 + 2 + 2"));

const { create, all } = require("mathjs");
const math = create(all);
const { cMathMLHandler } = require("mathjs-mathml");

let mathml = math.parse("x*sin(y/z)").toString(cMathMLHandler);

console.log(mathml);
