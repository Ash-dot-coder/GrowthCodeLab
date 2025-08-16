// In JavaScript, polymorphism is typically achieved through method overriding, where a subclass provides its own implementation of a method that is already defined in the parent class.

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    return "Unknown sound";
  }
}

class Lizard extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    return "Girrkku-Girrkku!";
  }
}

class Snake extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    return "Hiissss!";
  }
}

function animalInfo(animal) {
  console.log(`Name: ${animal.name}`);
  console.log(`Sound: ${animal.makeSound()}`);
}

const genericAnimal = new Animal("Generic Animal");
animalInfo(genericAnimal);

const liz = new Lizard("Remantsu");
animalInfo(liz);

const sna = new Snake("Supetsaa");
animalInfo(sna);

// ------------------- Define
// In this example, we have a superclass Animal with a constructor that initializes the name property and a method makeSound()
// that returns "Unknown sound" by default.

// The subclasses Lizard and Snake inherit from Animal and override the makeSound() method with their specific implementations.

// The animalInfo() function takes an Animal object (or any of its subclasses) as a parameter and calls both the name property
// and the makeSound() method on that object.

// Now, let's see how this demonstrates polymorphism:

// -> When we call animalInfo(genericAnimal), the function prints the name of the animal as "Generic Animal" and the sound as "Unknown sound".
//  This is because genericAnimal is an instance of the Animal class, and the method makeSound() is called from the Animal superclass.

// -> When we call animalInfo(Lizard), the function prints the name of the animal as "Buddy" and the sound as "Woof!".
// This is because Lizard is an instance of the Lizard class, and the method makeSound() is called from the Lizard subclass, overriding the method from the Animal superclass.

// -> When we call animalInfo(Snake), the function prints the name of the animal as "Supetsaa" and the sound as "Hhiisss!". This is because Snake is an instance of the Snake class,
// and the method makeSound() is called from the Snake subclass, overriding the method from the Animal superclass.

// This behavior illustrates polymorphism, as the animalInfo() function can work with different types of animals (Animal, Lizard, or Snake) in a generic way,
// without knowing the specific subclass. The appropriate method implementation is determined at runtime based on the actual object type passed to the function.
