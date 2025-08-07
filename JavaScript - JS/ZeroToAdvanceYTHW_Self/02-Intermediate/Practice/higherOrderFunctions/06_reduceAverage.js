const watchedAnime = [
  { name: "Chainsaw Man", rating: 8.7 },
  { name: "Demon Slayer", rating: 9.1 },
  { name: "Aisuu", rating: 7.1 },
  { name: "Susume", rating: 9.8 },
  { name: "Haikyuu", rating: 9.69 },
  { name: "Monster", rating: 9.89 },
];

const totalRating = watchedAnime.reduce((sum, anime) => sum + anime.rating, 0);
const averageRating = (totalRating / watchedAnime.length).toFixed(2);
console.log(`Average Rating: ${averageRating}`);
