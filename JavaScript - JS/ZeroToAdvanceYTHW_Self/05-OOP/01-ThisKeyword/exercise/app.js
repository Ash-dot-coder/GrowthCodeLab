// Create a person object and store your name & age
// -> Also create a method name (greetRegular) by using a regular function
//  --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`
// -> Create one more method name (greetArrow) using arrow function
//  --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`

// *************** SOLUTION

const animeMovie = {
  title: "Suzume",
  genre: ["Sad", "Mysterious", "Love", "Chase", "Transform"],
  greetRegular: function () {
    console.log(
      `Hey, Recently i watched "${this.title}" an Anime Movie: & i'd found "${this.genre}" experience.`
    );
  },

  greetArrow: () => {
    return `Hey, "${this.title}" is a proper finest '${this.genre}' show.`;
  },
};

animeMovie.greetRegular();
console.log(animeMovie.greetArrow());
