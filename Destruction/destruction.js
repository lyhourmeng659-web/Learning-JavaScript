const { educations } = require("../Object/object");

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

/*
console.log(person.age);
const {
  age,
  first_name,
  last_name,
  educations: [obj, obj2],
  educations: [obj1, ...obj3],
  educations: [, school2],
  educations: [{ school }],
} = person;
console.log(school2);

const sectec = educations.find((ele) => {
  return ele.school == "SETEC";
});

console.log(sectec);
const { fullname } = person;
console.log(fullname());
*/

let salary = [23, 35, 42, 52, 52, 68, 63, 34, 63, 61, 97, 77];
const [firstSalary, secondSalary, ...newArray] = salary;
const [firstSalay, , , , , , , , , , , lastSalary] = salary;
console.log(newArray);
console.log(lastSalary);

const newFirst = salary[0];
const last = salary[salary.length - 1];
console.log(newFirst);
console.log(last);
