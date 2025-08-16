// ---------------- ES5 Code
// SuperClass Constructor
// function Wrestler(name) {
//   this.name = name;
// }

// Method shared among all Wrestler instances
// Wrestler.prototype.makeSound = function () {
//   return "Unknown sound";
// };

// Subclass constructor inheriting from Wrestler
// function John(name) {
// Wrestler.call(this, name); // Call the superclass constructor
// }

// Set up prototype chain for John to inherit from Wrestler
// John.prototype = Object.create(Wrestler.prototype);

// Method specific to John
// John.prototype.makeSound = function () {
//   return "You Can't See Me!";
// };

// Creating instance of the classes
// const genericWrestler = new Wrestler("Generic Wrestler");
// console.log(genericWrestler.name);
// console.log(genericWrestler.makeSound());

// const jc = new John("John Cena");
// console.log(jc.name);
// console.log(jc.makeSound());

// ---------- Refactoring to Classes
// Superclass
class Wrestler {
  constructor(name) {
    this.name = name;
  }

  // Method shared among all Wrestler instances
  makeSound() {
    return "Unknown sound";
  }
}

// Subclass inheriting from Wrestler
class John extends Wrestler {
  constructor(name) {
    super(name); // Call the superClass constructor
  }

  // Method specific to John
  makeSound() {
    return "This is ..John Cena!";
  }
}

// Creating instances of the classes
const genericWrestler = new Wrestler("Generic Wrestler");
console.log(genericWrestler.name);
console.log(genericWrestler.makeSound());

const js = new John("John Cena");
console.log(js.name);
console.log(js.makeSound());

// ---------------- Define
// Wrestler defined using a constructor function. The Wrestler prototype has a makeSound() method that is shared among all instances of Wrestler.

// The subclass John is created by defining another constructor function that inherits from Wrestler. We use Object.create() to set up the prototype chain so that John.
// prototype inherits from Wrestler.prototype. This establishes the inheritance relationship.

// The John prototype also has its own makeSound() method, which overrides the makeSound() method from the Wrestler prototype.
//  This demonstrates how the John subclass can provide its specific implementation for the makeSound() method while reusing other functionalities from the Wrestler superclass.

// With this setup, instances of John can access both the properties and methods of the Wrestler superclass, as well as any methods that have been specifically defined for the John subclass.
