// Advanced JavaScript
// Array Method
// Method, Function, Routine, Subroutine

// Array Salary
// let salary = [23, 35, 42, 52, 52, 68, 63, 34, 63, 61, 97, 77];
// let salary1 = [23, 35, 42, 52, 52, 68, 63, 34, 63, 61, 97, 77, 23];
// let salary2 = [23, 35, 42, 52, 52, 68, 63, 34, 63, 61, 97, 77, 23, 11];

// Delete the last element
// salary.pop();

// Advanced Array Method

// toString - Covert all elements to strings separated by ,
// console.log(salary.toString());

// Delete first element
// salary.shift();

// Insert at the front
// salary.unshift(99);

// Accessing element salary[0] - 99
// console.log(salary.at(0));

// Combining array - Merging array
// const all_salary = salary.concat(salary1, salary2);
//console.log(all_salary);

// copyWithin
// all_salary.copyWithin(3, 0, 1)
// console.log(all_salary)

// We want to replace 61 (index 9) by 9(index )
// console.log(all_salary.indexOf(61));
// all_salary.copyWithin(9, 19, 20)
// console.log(all_salary)

// join - join all elements by a specific separator, example, |
// console.log(salary.join("|"));

// let salary = [23, 35, 42, 52, 52, 68, 63, 34, 63, 61, 97, 77];

// Loop inside array
// 1.
// function processArray(element) {
//   console.log(element);
// }
// salary.forEach(processArray);

// 2.
// salary.forEach(function (element) {
//   console.log(element);
// });

// 3.
// Arrow function
// const processArray = (ele) => {
//     console.log(ele)
// }
// salary.forEach(processArray)

// 4.
// salary.forEach((ele, index) => {
//   console.log(`Index: ${index} - Value: ${ele}`);
// });

// 5.
/*
function callB(ele, index, array) {
  console.log(`Element: ${ele} - Value: ${index}`);
  //   console.log(array.toString());
}
*/

// Function call
// salary.forEach(callB);

// Very common syntax
// arrow function

// Short Number
// salary.sort((a, b) => a - b);
// console.log(salary.join("-"));

// Sort String
// const EnlishLetter = ["D", "Y", "H", "B", "A"];
// EnlishLetter.sort(); // A-B-D-H-Y
// EnlishLetter.reverse(); // Y-H-D-B-A
// console.log(EnlishLetter.join("-"));

const people = [
  {
    name: "KK3",
    age: 17,
  },
  {
    name: "Chau Dara",
    age: 13,
  },
  {
    name: "Kevin",
    age: 15,
  },
  {
    name: "Wittenstein",
    age: 56,
  },
  {
    name: "MengLyhour",
    age: 25,
  },
  {
    name: "SeangMouykim",
    age: 24,
  },
];

// Get all objets from an array with age >= 17
// const peopleWith17Plus = people.filter((ele) => {
//   return ele.age >= 17;
// });

// Find with age of 25
// const peopleWith25Age = people.find((ele) => {
//   return ele.age == 25;
// });

// console.log(peopleWith17Plus);
// console.log(peopleWith25Age);

let salary = [23, 35, 42, 52, 52, 68, 63, 34, 63, 61, 97, 77];

console.log(salary);

const doubleSalary = salary.map((ele) => {
  return ele * 2;
});

console.log(doubleSalary);

// Array + Array = Result Type as String
const qustion = salary + doubleSalary;

console.log(typeof qustion);

// Some
const isTherePersonAge13 = people.some((ele) => {
  return ele.age == 12;
});

console.log(isTherePersonAge13);

let numbers = [1, 2, 3, 4, 5];
let doubleNumber = [];

numbers.forEach(function (number) {
  doubleNumber.push(number * 2);
});

console.log(doubleNumber);
