# 📚 Learning JavaScript

---

## 📖 About

JavaScript is one of the most popular programming languages in the world. It is the core language of web development and is used to build interactive websites, web applications, mobile applications, desktop applications, and even backend services using **Node.js**.

This repository contains my personal JavaScript learning journey. Every topic includes examples, practice code, and explanations to help beginners understand JavaScript step by step.

Whether you're new to programming or looking to strengthen your JavaScript fundamentals, this repository can serve as a useful learning resource.

---

## 🎯 Learning Objectives

After completing this repository, you will be able to:

- Understand JavaScript syntax
- Work with variables and data types
- Use operators and expressions
- Write reusable functions
- Manipulate arrays and objects
- Apply destructuring
- Use array methods effectively
- Understand asynchronous programming with Promises
- Build a strong foundation for learning:
  - DOM Manipulation
  - ES6+
  - Node.js
  - React
  - Vue
  - Angular

---

# 📂 Course Structure

```
Learning-JavaScript/
│
├── Array/
│   ├── array.js
│   └── ...
│
├── ArrayMethod/
│   ├── map.js
│   ├── filter.js
│   ├── reduce.js
│   └── ...
│
├── Destruction/
│   ├── object-destructuring.js
│   ├── array-destructuring.js
│   └── ...
│
├── Function/
│   ├── function.js
│   ├── arrow-function.js
│   └── ...
│
├── Object/
│   ├── object.js
│   └── ...
│
├── Promise/
│   ├── promise.js
│   ├── async-await.js
│   └── ...
│
├── start.js
└── README.md
```

---

# 📚 Topics Covered

## ✅ JavaScript Basics

- Variables (`let`, `const`, `var`)
- Data Types
- Operators
- Type Conversion
- Comments
- Console Output

---

## 🔄 Arrays

Learn how to create and manipulate arrays.

Topics include:

- Creating Arrays
- Accessing Elements
- Updating Values
- Looping through Arrays
- Nested Arrays

Example:

```javascript
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]);
```

---

## ⚡ Array Methods

Practice the most commonly used array methods.

- map()
- filter()
- find()
- findIndex()
- reduce()
- some()
- every()
- sort()
- includes()
- push()
- pop()
- shift()
- unshift()
- slice()
- splice()
- concat()
- join()

Example:

```javascript
const numbers = [1,2,3,4,5];

const even = numbers.filter(number => number % 2 === 0);

console.log(even);
```

---

## 🎯 Functions

Topics include:

- Function Declaration
- Function Expression
- Arrow Function
- Parameters
- Default Parameters
- Return Values
- Callback Functions

Example:

```javascript
function greet(name){
    return `Hello ${name}`;
}

console.log(greet("John"));
```

---

## 📦 Objects

Learn how JavaScript stores data using objects.

Topics include:

- Object Creation
- Properties
- Methods
- Object.keys()
- Object.values()
- Object.entries()
- Spread Operator

Example:

```javascript
const student = {
    name: "John",
    age: 20
};

console.log(student.name);
```

---

## 🎁 Destructuring

Learn modern ES6 destructuring.

### Object Destructuring

```javascript
const person = {
    name: "John",
    age: 20
};

const { name, age } = person;
```

### Array Destructuring

```javascript
const colors = ["Red", "Blue", "Green"];

const [first, second] = colors;
```

---

## ⏳ Promise & Asynchronous JavaScript

Understand asynchronous programming.

Topics include:

- Promise
- resolve()
- reject()
- then()
- catch()
- finally()
- async / await

Example:

```javascript
const promise = new Promise((resolve, reject) => {
    resolve("Success");
});

promise.then(result => {
    console.log(result);
});
```

---

# 💻 Requirements

- Visual Studio Code
- Node.js (Optional)
- Google Chrome
- JavaScript Enabled Browser

---

# ▶️ Running the Examples

Clone the repository

```bash
git clone https://github.com/lyhourmeng659-web/Learning-JavaScript.git
```

Go to the project

```bash
cd Learning-JavaScript
```

Run JavaScript files

```bash
node filename.js
```

or simply open the file inside VS Code and execute it using **Code Runner**.

---

# 🚀 Recommended Learning Path

1. JavaScript Basics
2. Variables
3. Data Types
4. Functions
5. Objects
6. Arrays
7. Array Methods
8. Destructuring
9. Promise
10. Async / Await

---

# 📖 References

- MDN Web Docs
- JavaScript.info
- ECMAScript (ES6+) Documentation

---

# 🎓 Who is this Repository For?

This repository is suitable for:

- Beginners learning JavaScript
- University students
- Bootcamp students
- Self-taught developers
- Frontend developers
- Anyone preparing for JavaScript interviews

---

# 🌟 Future Topics

The repository will continue expanding with:

- DOM Manipulation
- Events
- Fetch API
- Local Storage
- JSON
- Modules
- Classes
- Error Handling
- Closures
- Hoisting
- Event Loop
- Web APIs
- Node.js Basics
- Express.js
- REST API
- ES6+ Advanced Features

---

# 🤝 Contributing

Contributions are welcome!

If you have suggestions or improvements:

1. Fork this repository
2. Create a new branch
3. Commit your changes
4. Push to GitHub
5. Open a Pull Request

---
