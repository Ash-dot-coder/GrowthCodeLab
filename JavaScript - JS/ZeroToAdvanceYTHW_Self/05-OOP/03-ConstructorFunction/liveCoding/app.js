// Constructor functions in JavaScript are regular functions used with the new keyword to create and initialize objects with shared properties and methods.
// They act as blueprints for creating multiple instances of objects with the same structure and behavior.

function AnimeFriend(firstName, lastName, pl) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pl = pl;
  this.info = function () {
    console.log(
      `Hey "${this.firstName} - ${this.lastName}", did you learned: ${this.pl}?`
    );
  };
  console.log(this);
}

// New KEYWORD:
// 1. First create empty object{}
// 2. Sets "this" to point to that object
// 3. We can omit the return statement using "new" keyword

// Creating instances using the constructor function
const aashish = new AnimeFriend("Aashish", "Meher", "JavaScript");
const dhruv = new AnimeFriend("Dhruv", "Asati", "DSA");
// aashish.info();
// dhruv.info();

// *********************** Example 2
function Manga(
  type,
  title,
  volumes,
  chapters,
  startedYear,
  author,
  genre,
  ratingsReached,
  storyCompleted
) {
  this.type = type;
  this.title = title;
  this.volumes = volumes;
  this.chapters = chapters;
  this.startedYear = startedYear;
  this.author = author;
  this.genre = genre;
  this.ratingsReached = ratingsReached;
  this.storyCompleted = storyCompleted;

  this.getInfo = function () {
    return `A ${this.type}: "${this.title}" started this year: "${this.startedYear}" by '${this.author}', which currently available (${this.volumes})-Volumes with [${this.chapters}]-Chapters till now. It's provided [${this.genre}] types of experience and it reached (${this.ratingsReached}) ratings. Is the Story Completed: (${this.storyCompleted}).`;
  };
}

const manga1 = new Manga(
  "MANGA",
  "Vagabond",
  37,
  327,
  "1998-2015(hiatus)",
  "Takehiko Inoue",
  ["Epic", "Historical", "Martial arts(Seinen)"],
  "82 million+",
  "NO-On indefinite hiatus since 2015: unresolved!"
);
const manga2 = new Manga(
  "MANGA",
  "Berserk",
  42,
  375,
  "1989-present",
  "Kentaroo Miura",
  ["Dark Fantasy", "Seinen(though not explicitly stated above, widely known)"],
  "70 million+",
  "NO-Ongoing (irregular serialization), continuing post-Miura under supervision!"
);
const manga3 = new Manga(
  "MANGA",
  "Vinland Saga",
  28,
  220,
  "2005-2025",
  "Makoto Yukimura",
  ["Adventure", "Epic", "Historical(Seinen)"],
  "7 million+",
  "Yes-concluded July 2025!"
);

console.log(manga1.getInfo());
console.log(manga2.getInfo());
console.log(manga3.getInfo());
