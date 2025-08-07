let anime = Symbol("favAnime");

let favAnime = {
  name: "Attack On Titan",
  rating: 9.9,
  seasons: 4,
  favCharacter: "Mikasa Ackerman",
  doUHaveACrushOnMikasaAckerman: true,
  favWord: "Tatakae",
  isItGOAT: true,
  isItWorthToWatch: true,
  onlyForKids: false,
  [anime]:
    "This anime is fully loaded by 'Emotion, Inspired, Motivated, Courage...'",
};

console.log("Anime: 💀🔥");
for (let key in favAnime) {
  console.log(`${key}: ${favAnime[key]}`);
}
console.log("Secret Note: ", favAnime[anime]);
console.log(Object.getOwnPropertySymbols(favAnime));

// Clone with symbol key
let clonedFavAnime = {
  ...favAnime,
  [Object.getOwnPropertySymbols(favAnime)[0]]:
    favAnime[Object.getOwnPropertySymbols(favAnime)[0]],
};
console.log(
  "Cloned Secret Note: ",
  clonedFavAnime[Object.getOwnPropertySymbols(clonedFavAnime)[0]]
);
