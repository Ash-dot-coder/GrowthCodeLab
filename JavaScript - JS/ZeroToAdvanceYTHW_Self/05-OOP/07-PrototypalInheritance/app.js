// Prototypal inheritance is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects. It is a fundamental concept in the language and is based on the prototype model. In prototypal inheritance, objects can serve as prototypes for other objects, forming a hierarchical chain of inheritance.

// In JavaScript, every object has an internal property called [[Prototype]] (often referred to as __proto__), which points to its prototype object. When you access a property or method on an object, and that property or method is not found in the object itself, JavaScript looks for it in the object's prototype (and further up the prototype chain, if needed) until it finds the property or reaches the top of the prototype chain, which is usually the Object.prototype.

// Parent constructor function
function Mobile(model) {
  this.model = model;
}

// Adding a method to the prototype of Mobile
Mobile.prototype.sound = function () {
  return "Mobile sound";
};

// Child constructor function inheriting from Mobile
function CMF(model, os) {
  Mobile.call(this, model);
  this.os = os;
}

// Set CMF's prototype to an instance of Mobile to establish inheritance
CMF.prototype = Object.create(Mobile.prototype);

// Adding a method specific to Moble's prototype
CMF.prototype.ring = function () {
  return "tin tin ..tin tin..";
};

// Creating a CMF instance
const CMF_Phone1 = new CMF("Phone_1", "NOS");

console.log(`Model: ${CMF_Phone1.model}`);
console.log(`Sound: ${CMF_Phone1.sound()}`);
console.log(`OS: ${CMF_Phone1.os}`);
console.log(`Ring: ${CMF_Phone1.ring()}`);

// --------------------------------
// Super Class
const CellPhone = function () {
  this.a = 10;
};

CellPhone.prototype.z = 30;

const Nokia = function () {
  CellPhone.call(this);
  this.b = 20;
};

// Prototype Inheritance
Nokia.prototype = Object.create(CellPhone.prototype);
Nokia.prototype.constructor = Nokia;

const n = new Nokia();
console.log(n.a);
console.log(n.b);
console.log(n.z);
