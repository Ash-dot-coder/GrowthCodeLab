// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

let Naruto = {
  greet: function () {
    console.log(
      `Naruto Anime has '${this.firstName}-${this.secondName}' a main character.`
    );
  },
};

const nu = Object.create(Naruto);
nu.firstName = "Naruto";
nu.secondName = "Uzumaki";
nu.greet();

let lee = Object.create(Naruto, {
  firstName: { value: "Rock" },
  lastName: { value: "Lee" },
});

console.log(lee);
lee.greet;
