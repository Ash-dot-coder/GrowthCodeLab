// 1. Create a person constructor which has parameters of (name, age, gender)
// 2. Access parameter values to the call object.
// 3. Create a method name (info), which will just print the info.
// 4. Create a few instances
// 5. Access each property

// Exercise: 1
function CreateManga(type, title, character, genre, rating) {
  this.type = type;
  this.title = title;
  this.character = character;
  this.genre = genre;
  this.rating = rating;

  this.getManga1 = function () {
    return `${this.title} - is a one of the GOAT ${type} ever, Which based on ${character}'s life. Which presented with "${this.genre}" also based on ${this.rating} rating.`;
  };

  this.getManga2 = function () {
    return `${this.title} - is the one of the Darkest ${
      this.type
    } ever, which provide "${this.genre}" experience follow the ${
      this.character
    }'s life - with ${9.9} ratings.`;
  };
}
const samuraiManga = new CreateManga(
  "Manga",
  "Vagabound",
  "Miyamoto Mushashi - Takezo",
  ["Motivational", "Fight", "Mature", "Life", "Action"],
  9.9
);
console.log(samuraiManga);
console.log(samuraiManga.getManga1());
const darkManga = new CreateManga(
  "Manga",
  "Berserk",
  "Guts",
  ["Deep - Dark", "Traumatized", "Sad", "Dark Life Moral", "Action"],
  9.9
);
console.log(darkManga);
console.log(darkManga.getManga2());

// *************** EXERCISE 2
// In this exercise, you will create a constructor function called Car that represents a car with specific properties such as make, model, year, and color. Additionally, you will define two methods, start and stop, to simulate starting and stopping the car.

// -> Define the Car constructor function that takes four parameters: make, model, year, and color.
// -> Inside the constructor, use this to assign the parameters to the corresponding properties of the object being created.
// -> Define a method called start as a property of the object. The start method should return a string message like "Starting the Toyota Camry..." where "Toyota" is the make and "Camry" is the model of the car.
// -> Define another method called stop as a property of the object. The stop method should return a string message like "Stopping the Honda CR-V." where "Honda" is the make and "CR-V" is the model of the car.
// -> Create two car instances (car1 and car2) using the Car constructor with different properties.
// -> Test the methods by calling car1.start() and car2.stop(). Observe the output and make sure the messages display the correct make and model of the cars.

function Anime(nextLevel, type, title, genre, ratings) {
  this.nextLevel = nextLevel;
  this.type = type;
  this.title = title;
  this.genre = genre;
  this.ratings = ratings;
  this.start = function () {
    console.log(
      `Starting "${this.title} - ${this.type}" for ${this.genre} experience`
    );
  };
  this.stop = function () {
    console.log(
      `Currently i stopped watching ${this.type} and start following the ${this.nextLevel} for more details`
    );
  };
}
const anime1 = new Anime(
  "Manga",
  "Anime",
  "Attack On Titan",
  ["Action", "War", "Thriller", "Mature Adult", "Life Lesson"],
  9.9
);
console.log(anime1);
console.log(anime1);
anime1.start();
anime1.stop();
