// When unuse Array
// const my_money_1 = 0;
// const my_money_2 = 1.4;
// const my_money_3 = 0.7;
// const my_money_4 = 1.6;
// const my_money_5 = 2.4;
// const my_money_6 = 1.8;
// const my_money_7 = 2.3;
// const my_money_8 = 1.2;
// const my_money_9 = 2.2;
// const my_money_10 = 2.2;
// const my_money_11 = 2.9;
// const my_money_12 = 4.4;
// Array
// when use Array
// let my_money = [0, 2.5, 3.4, 1.11, 9.7, 45];
// Index start from 0 ...
// How to access array in javascript
// console.log(my_money.toString()); // 0,2.5,3.4,1.11,9.7,45
// console.log(my_money.length); // 6
// console.log(my_money[5]);

// my_money.push(1, 2, 3); // add to last index of array
// my_money.pop(); // remove last index of array
// my_money.shift(); // remove first index of array
// console.log(my_money);
// my_money = my_money.slice(1, 3); // cut array from index start to end index
// console.log(my_money);

// Trying to delete an element from array without using splice
// let code_id = [1, 2, 3, 4, 5];
// let update_code_id = code_id.filter((id) => id !== 1);
// console.log(update_code_id);

// delete code_id[1];
// console.log(code_id);

// Delete code id in array from index
// let code_id = [1, 2, 3, 4, 5];
// let indexTarget = 1; // index of 2

// "Keep every item whose index is NOT 1"
// let update_code_id = code_id.filter((item, index) => index !== indexTarget);
// console.log(update_code_id); // Result [ 1, 3, 4, 5 ]

// Use  for each
// my_money.forEach((my_money, index) => {
//   console.log(`${index}: ${my_money}`);
// });

// Use for of
// for (const index of my_money) {
//   console.log(index);
// }

// Use standard for loop
// for (let i = 0; i < my_money.length; i++) {
//   console.log(my_money[i]);
// }

// let motor = ["click", "wave", "icon", "dream", "ADV"];
// console.log(motor);

// motor.splice(1, 2);
// console.log(motor);

// const index = motor.indexOf("dream");
// console.log(index);

// let motor = ["click", "wave", "icon", "dream", "ADV"];
// remove index 2 = "icon"
// let index_to_delete = 2;
// keep [ 'click', 'wave' ] in new_motor and cut [ 'dream', 'ADV' ] create new array
// const new_motor = motor.slice(0, index_to_delete);
// keep start from index 3 to last index in array
// const new_motor_2 = motor.slice(index_to_delete + 1);
// console.log(new_motor);
// console.log(new_motor_2);
// concat
// motor = new_motor.concat(new_motor_2)
// console.log(motor)

// let salary = [23, 35, 42, 52, 52, 63, 68, 34, 63, 61, 97, 77];
// let sum = 0;
// for (initialization, condition, increment)
// for (let i = 0; i < salary.length; i++) {
// console.log(`Index: ${i}`); // index and i is string
// console.log("Index:", i); // index is string, i is number
// sum = sum + salary[i];
// sum += salary[i]; // update 'sum' value by existing 'sum'
// }
// console.log("Total Salary:", sum);

/*
let multiple = 1;
for (let i = 1; i < salary.length + 1; i++) {
  multiple = multiple * i;
}
console.log(multiple);
*/

// Array Props
const names = ['Sok', 'Tola', 'Meng', 'Kosal'];

Array.prototype.myForEach = function (cbf) {
  for (let i = 0; i < this.length; i++) {
    (cbf(this[i], i), this);
  }
};

names.myForEach(function (item) {
  console.log(item);
});

// Reduce Method
const salary = [300, 500, 400, 200];
// a = 0; c = 300 => 300;
// a = 300; c = 500 => 800;
// a = 800; c = 400 => 1200;
// a = 1200; c = 200 => 1400;
const total = salary.reduce(function (ac, cr) {
  // Return as number
  return ac + cr;
}, 0);
console.log(total);

const array = ['Heng', 'Menghoy'];
// let fullName = '';

/*
array.forEach(function (i) {
  fullName += i;
});
console.log(fullName);
*/

// ac = "" cr = "Heng" => " Heng"
// ac = " Heng" cr = "Menghoy" =>  "Heng Menghoy"
const fullName = array.reduce(function (ac, cr) {
  return `${ac} ${cr}`;
}, '');
console.log(fullName);

const fullNameNoSpace = array.reduce(function (ac, cr) {
  return `${ac} ${cr}`;
});
console.log(fullNameNoSpace);
