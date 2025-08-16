// Every Javascript object has an anonymous property called prototype
// Remember functions & arrays are also an object
// that prototype will be the parent of that object, prototype property is object by itself, which have some special properties & methods

// Every object is associated with another object.
// The object (a) is associated with [[Prototype]] Object
// --> which means an object will inherit all properties of an object.prototype || [[Prototype]]

// We can check the prototype of something in 3 ways:
// --> obj.__proto__
// --> obj.constructor.prototype
// --> object.getPrototypeOf(a)

// ******* Checking the Prototype
// const obj = {};
// console.log(obj.__proto__.__proto__);

// const arr = new Array();
// console.log(arr.__proto__.__proto__.__proto__);

// const str = new String();
// console.log(str.__proto__.__proto__.__proto__);

function senin(firstName, lastName, skill) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.skill = skill;
}

const vs = new senin("Thorfinn", "Karlsefni", [
  "Speed",
  "Agility",
  "Proficiency with Daggers",
  "Swords",
]);
console.log(vs);
console.log(vs.__proto__);
console.log(vs.__proto__.__proto__);
console.log(vs.__proto__.__proto__.__proto__);

// ------------------------------
// ******* Changing the Buil-in Methods
// console.log(Array.prototype);
// Array.prototype.pop = function () {
//   return "POP IT UP MAN";
// };

// const myArr = ["One", "Two", "Three"];
// console.log(myArr.pop());
// -------------------------------

// -------------------------------
// ******** We can define our own method as well
String.prototype.hello = function () {
  console.log(this);
  console.log(this.toUpperCase());
};

console.log("this is a string".hello());
