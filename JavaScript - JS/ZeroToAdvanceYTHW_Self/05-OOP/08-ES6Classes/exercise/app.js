// 1. Create a class name "Hero", properties (name, level)
// 2. Create greet method which will just greet
// 3. Create Instance of "hero" class
// 4. Create New class name "Mega", inherit properties from "hero" class & provide property of spell
// 5. Create instance of "Mega" class

class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  // Adding a method to the constructor
  quote() {
    return `${this.name} says "Damn!"`;
  }
  fight() {
    return `${this.name} says "Tatakae!"`;
  }
}

const hero1 = new Hero("Eren", 1);
console.log(hero1);
console.log(hero1.fight());

// Creating a new class from the parent
class Mage extends Hero {
  constructor(name, level, spell) {
    // Chain constructor with super
    super(name, level);

    // Add a new property
    this.spell = spell;
  }
}

const hero2 = new Mage("Levi", 2, "Brave Solder");
console.log(hero2);
console.log(hero2.quote());
