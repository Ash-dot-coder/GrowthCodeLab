const watchedAnime = [
  {
    name: "Chainsaw Man",
    rating: 8.7,
    genre: ["Action", "Comedy", "Pale Brutal"],
  },
  {
    name: "Demon Slayer",
    rating: 9.1,
    genre: ["Action", "Comedy", "Dark Brutal"],
  },
  { name: "Aisuu", rating: 7.1, genre: ["Sport", "Comedy"] },
  { name: "Susume", rating: 9.8, genre: ["Dark Emotional", "Thriller"] },
  {
    name: "Haikyuu",
    rating: 9.69,
    genre: ["Sport", "Comedy", "Action", "Thriller"],
  },
  {
    name: "Monster",
    rating: 9.89,
    genre: ["Crime", "Psychological", "Action", "Thriller"],
  },
];

for (let animes of watchedAnime) {
  if (animes.name && animes.genre) {
    console.log(animes.name.trim().toUpperCase(), animes.genre);
  }
}
