// Promise
// Javascrit: I promise you a result
// return type: Promise<Type>
// It needs some time to process
// Find some name in database, 10M, it takes sometimes
// const person = db.find("Meng Lyhour") // return type promise
// When the operation is ready
/* person.then((result) => {
    result.age
    result.name
})
*/
/*
    person.age
    person.dateOfBirth
    person.name
*/

// class: dictate what an object look like
/*
const ob = new Object({
  name: "Meng Lyhour",
  age: 21,
});

const ob1 = new Object({
  name: "Oul Rangsey",
  age: 23,
});

const db = {
  find: new Promise((resolve, reject) => {
    // When the oparation is successful
    // DB logic
    const error = false;
    const person = {
      name: "Meng Lyhour",
      age: 21,
    };
    setTimeout(() => {
      if (error) {
        reject("Error finding in database");
      } else {
        resolve(person);
      }
    }, 5000);
  }),
};

const person = db.find;
console.log("Hey");
person
  .then((result) => {
    console.log(result);
  })
  .catch((reson) => {
    console.log(reson);
  });
console.log("Excute till this line");
*/

const { students } = require("./students.js");
const db = {
  find: (name) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name.includes("1")) {
          reject("No name should include number");
        } else {
          const student = students.find((value) => {
            return value.name == name;
          });
          if (student) {
            resolve(student);
          } else {
            reject("Student not found");
          }
        }
      }, 5000);
    });
  },
};

/*
const student = db.find("Isabella");
const service = {
  register(name) {
    console.log(`Registering ${name}`);
  },
};
console.log("Hey...");
student
  .then((student) => {
    console.log(student);
    service.register(student.name);
  })
  .catch((reson) => {
    console.log(reson);
  });
console.log("Excute till this line");
console.log("Excute till this line1");
console.log("Excute till this line2");
console.log("Excute till this line3");
*/

async function main() {
  try {
    const student = await db.find("Henry");
    console.log(student.name);
  } catch (err) {
    console.log("Error");
    console.log(err);
  }
}

main();
