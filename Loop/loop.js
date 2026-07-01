// While Loop
/*
let n = 50;

while (n < 100) {
  console.log('Running');
  n++;
}
*/

// Do while Loop
/*
let a = 1;
do {
  console.log(a);
  a++;
} while (a <= 10);
*/

// For Loop
/*
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
*/

// Exercise Loop 1
/*
const names = ['Sok', 'Meng', 'Chea', 'Nang'];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
*/
// Result
// Sok // index 0
// Meng // index 1
// Chea // index 2
// Nang // index 3

// Exercise Loop 2
const students = [
  {
    name: 'Meng Lyhour',
    score: 90,
  },
  {
    name: 'Oul Rangsey',
    score: 70,
  },
  {
    name: 'Touch Sitipol',
    score: 50,
  },
  {
    name: 'Phim Chivorn',
    score: 60,
  },
];

// Use for Loop
for (let i = 0; i < students.length; i++) {
  console.log(`Students: ${students[i].name} has ${students[i].score} scores.`);
}

// Use While Loop
/*
let a = 0;
while (a < students.length) {
  console.log(`Students: ${students[a].name} has ${students[a].score} scores.`);
  a++;
}
*/

// Use Do While Loop
/*
let index = 0;
do {
  console.log(
    `Students: ${students[index].name} has ${students[index].score} scores.`,
  );
  index++;
} while (index < students.length);
*/
