// A factory function is a type of function that is used to create and return objects.
//  It's a design pattern that provides an alternative way to create objects compared to using constructors and the new keyword.

// -------------------------
// let jin = {
//   anime: "Solo Leveling",
//   firstName: "Jin",
//   lastName: "woo",
//   fullName: function () {
//     console.log(
//       `"${this.firstName}-${this.lastName}" is a Main Character of '${this.anime}'.`
//     );
//   },
// };

// jin.fullName();

// -------------------------
// function createManga(title, genre, rating) {
//   return {
//     title: "Parasyte",
//     genre: ["Horror", "Thriller", "Drama", "Psychological", "Comedy", "Love"],
//     rating: 8.7,
//     fulldetails: function () {
//       console.log(
//         `'${this.title}': Comes with "${this.genre}" experience and it get upto (${this.rating}) ratings.`
//       );
//     },
//   };
// }

// const Tenma = createManga(
//   "Monster",
//   ["Crime", "Thriller", "Intense Drama", "Adult Mature"],
//   9.7
// );
// const Gut = createManga(
//   "Berserk",
//   ["Dark-Drama", "Dark-Theory", "Pain", "Thriller", "Dark-Adult", "Love"],
//   9.7
// );
// console.log(Tenma);
// console.log(Gut);
// console.log(Tenma.fulldetails());
// console.log(Gut.fulldetails());
// -------------------------

// -------------------------
function createAnime(title, seasons, favChar, genre, ratings) {
  return {
    title: title,
    seasons: seasons,
    favChar: favChar,
    genre: genre,
    ratings: ratings,
    fullDetails: function () {
      console.log(
        `Hey i just watched "${this.title}" anime, which have [${this.seasons}] seasons, it also provide ${this.genre} experienced & now i can say it deserve to be (${this.ratings}) ratings: & my Favourite Character is "${this.favChar}"`
      );
    },
  };
}
const karasuno = createAnime(
  "Haikyuu",
  4,
  "Tobi Kageyama",
  ["Sports", "Life Lessons", "Thriller", "Comedy"],
  9.9
);
const tenma = createAnime(
  "Monster",
  1,
  "Kenzo Tenma",
  ["Crime", "Psychological-Drama", "Adult Mature"],
  9.8
);
console.log(karasuno);
console.log(tenma);

console.log(karasuno.fullDetails());
console.log(tenma.fullDetails());
// -------------------------