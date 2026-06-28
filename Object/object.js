// Person
// age, name, height, weight
// Properties of object

const educations = [
  {
    school: "Chhbar Ampov",
    year: 2011,
  },
  {
    school: "SETEC",
    year: 2015,
  },
  {
    school: "Japan",
    year: 2021,
  },
];

// Declare empty object
let car = {};

car.wheels = 4;
car.name = "Chevorlet";
car.color = "white";
car.type = "SUV";

// console.log(car);

// delete car.color;
// delete car.name

// console.log(car);

// Object
const person = {
  // number
  age: 21,
  // string
  first_name: "Meng",
  last_name: "Lyhour",
  // number
  height: 165,
  // number
  weight: 49,
  // array
  educations: [
    {
      school: "Chhbar Ampov",
      year: 2011,
    },
    {
      school: "SETEC",
      year: 2015,
    },
    {
      school: "Japan",
      year: 2021,
    },
  ],
  // boolean
  married: false,
  // object
  car: car,
  // function
  fullname: function () {
    return this.first_name + " " + this.last_name;
  },
  // Practice
  // Return all school name separated by ,
  // Chhabar Ampov - Year, SETEC - Year, Japan - Year
  edu_backgrouds: function () {
    all_schools = "";
    for (let i = 0; i < this.educations.length; i++) {
      if (i == this.educations.length - 1) {
        all_schools = `${all_schools} ${this.educations[i].school} - ${this.educations[i].year}`;
      } else {
        all_schools =
          all_schools +
          this.educations[i].school +
          " - " +
          this.educations[i].year +
          ", ";
      }
      //   all_schools = all_schools + this.educations[i].school + ", ";
    }
    return all_schools;
  },
};

console.log(JSON.stringify(person));
// console.log(person.edu_backgrouds());
exports.person = person;
module.exports = { educations };

// 2 ways to access properties
// object.property
// object["property"]
// console.log(person.age);
// console.log(person["age"]);

// console.log(person.first_name);
// console.log(person["first_name"]);

// console.log(person.last_name);
// console.log(person["last_name"]);

// console.log(person.fullname);
// console.log(person["first_name"]);

// console.log(person.height);
// console.log(person["height"]);

// console.log(person.weight);
// console.log(person["weight"]);

// Array of object
// console.log(person.educations);
// console.log(person["educations"]);

// console.log(person.married);
// console.log(person["married"]);
// Covert JavaScript object to Json data
// console.log(JSON.stringify(person));

// Access car name
// console.log(person.car.name);
// Access school Chhbar Ampov
// console.log(person.educations[0].school);

// Update year in educations from index 0
// person.educations[0].year = 2026;
// console.log(person.educations[0].year);

// How to add eduction background in educations
/*
person.educations.push({
  school: "Japan",
  year: 2021,
});
console.log(person.educations);
*/

// console.log(person.fullname());
