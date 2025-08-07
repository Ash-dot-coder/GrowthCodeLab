// Create and extend Anime array
const Anime = [
  {
    name: "Berserk",
    category: "Dark pain",
    rating: 9.9,
    worthToWatching: true,
  },
  {
    name: "Vinland Saga",
    category: "Inspiration",
    rating: 9.69,
    worthToWatching: true,
  },
  {
    name: "Demon Slayer",
    category: "Action, dark",
    rating: 9.46,
    worthToWatching: true,
  },
  {
    name: "Naruto",
    category: "Action, dark",
    rating: 9.9,
    worthToWatching: true,
  },
  {
    name: "One Piece",
    category: "Action, Motivated",
    rating: 9.9,
    worthToWatching: true,
  },
  {
    name: "Jujutsu Kaisen",
    category: "Action, drama",
    rating: 7.9,
    worthToWatching: true,
  },
];
const extendAnime = [
  ...Anime,
  {
    name: "Chainsaw Man",
    category: "Action, Gore",
    rating: 8.5,
    worthToWatching: false,
  },
  {
    name: "Spy X Family",
    category: "Action, Comedy, Spy",
    rating: 8.2,
    worthToWatching: true,
  },
];
console.log("Extend Anime List: ");
console.table(extendAnime);
