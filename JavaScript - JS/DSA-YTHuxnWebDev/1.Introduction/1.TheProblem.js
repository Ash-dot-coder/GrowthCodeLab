// // Data Structure
// const terrifierDataBase = ["Jonathan", "Giabbe", "Sialliana", "ArtOfClown", "Victoria"];

// // Algorithm for finding a specific user
// const findTerrifierCharacter = (allCharacters, characterName) =>{
//     for(let i = 0; i < allCharacters.length; i++){
//         if(allCharacters[i] === characterName){
//             console.log(`Found ${characterName}`);
//         }
//     }
// };

// findTerrifierCharacter(terrifierDataBase, "ArtOfClown");

const horrorDataBase = [
  "Annabelle",
  "Conjuring",
  "BhoolBhulaiya",
  "Sinister",
  "TheRing",
  "Insidious",
  "Haunted",
  "Saw",
];

const findHorrorDB = (allDB, horrorName) => {
  for (let i = 0; i < allDB.length; i++) {
    if (allDB[i] === horrorName) {
      console.log(`I Found: ${horrorName}!`);
    }
  }
};

findHorrorDB(horrorDataBase, "Conjuring");
