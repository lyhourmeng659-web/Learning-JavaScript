// alert('Hello');
// console.log(document.body.children[0]);

// Target Node Object
/*
const heading = document.getElementById('heading');
console.log(heading);

const element = document.querySelector('.list :nth-child(even)'); // last
const element1 = document.querySelector('.list :nth-child(odd)'); // first
const element2 = document.querySelector('.list :nth-child(1)'); // catch one
const element3 = document.querySelector('.list :last-child'); // catch last
const element4 = document.querySelector('.list :first-child'); // catch first
const element5 = document.querySelector("input[type='text']"); // catch input text
const element6 = document.querySelector("input[type='button']");
console.log(element);
console.log(element1);
console.log(element2);
console.log(element3);
console.log(element4);
console.log(element5);
console.log(element6);
*/

// Target Element Nodes
// const ElementByLI = document.getElementsByTagName('li');
// console.log(ElementByLI);
/*
const spreedElements = [...ElementByLI];
spreedElements.forEach(function (ele) {
  console.log(ele);
});

const ElementByClassName = document.getElementsByClassName('btn');
console.log(ElementByClassName);
*/
/*
const ElementByName = document.getElementsByName('code');
ElementByName.forEach(function (ele) {
  console.log(ele);
});

const ElementByQueryALL = document.querySelectorAll('li');
console.log(ElementByQueryALL);
*/

// ChildNode vs Children property
const elementUL = document.querySelector('ul');
console.dir(elementUL.childNodes); // + white space
console.dir(elementUL.children);

// Target Parent Element
const elementClassItem = document.querySelector('.item');
console.dir(elementClassItem.parentElement.parentElement);

// Sibling Element
const elementClassBox = document.querySelector('.box');
const ul = document.querySelector('ul');
console.log(elementClassBox.previousSibling.nextSibling);
console.log(elementClassBox.previousElementSibling);
console.log(ul.nextSibling.nextSibling);
console.log(ul.nextElementSibling);

// Style Property
const elementIDHeading = document.querySelector('#heading');
/*
elementIDHeading.style.width = '500px';
elementIDHeading.style.height = '30rem';
elementIDHeading.style.backgroundColor = 'blue';
elementIDHeading.style.borderRadius = '20px 50px';
elementIDHeading.style.color = 'white';
*/

elementIDHeading.style.cssText = 'background-color: white; color: red';
console.dir(elementIDHeading.style);

// First & Last Child
const list = document.querySelector('.list');
console.log(list.firstChild);
console.log(list.lastChild);
console.log(list.firstElementChild);
console.log(list.lastElementChild);
