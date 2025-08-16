// Abstract  class (providing a blueprint for subclasses)
class Tech {
  constructor(name) {
    this.name = name;
  }

  // Abstract method (to be implemented by subclasses)
  makeSound() {
    throw new Error('Method "makeSound" must be implemented.');
  }
}

// Concrete subclass
class SmartWatch extends Tech {
  constructor(name) {
    super(name);
  }

  // Implementing the abstract method
  makeSound() {
    return "Tinning!";
  }
}

// Concrete subclass
class SmartTV extends Tech {
  constructor(name) {
    super(name);
  }

  // Implementing the abstract method
  makeSound() {
    return "Clich!";
  }
}

const smartWatch = new SmartWatch("Google");
console.log(`SmartWatch Name: ${smartWatch.name}`);
console.log(`SmartWatch Sound: ${smartWatch.makeSound()}`);

const smartTv = new SmartTV("LG");
console.log(`SmartTV Name: ${smartTv.name}`);
console.log(`SmartTV Sound: ${smartTv.makeSound()}`);

// ---------- Define
// In this example, we have an abstract class Tech that contains an abstract method makeSound().
// The makeSound() method is declared in the Tech class but doesn't provide an implementation.
//  It's meant to be implemented by subclasses like SmartWatch and SmartTV.

// The SmartWatch and SmartTV classes are concrete subclasses that inherit from the Tech class.
//  They implement the abstract method makeSound() with their own specific implementations for making sounds.

// By using abstraction, we define a common interface (makeSound()) that each subclass must implement,
//  while hiding the internal details of how each tech makes its sound.
//  This simplifies the code and allows us to work with tech at a higher level of abstraction,
// without worrying about the specifics of each tech's sound implementation.
