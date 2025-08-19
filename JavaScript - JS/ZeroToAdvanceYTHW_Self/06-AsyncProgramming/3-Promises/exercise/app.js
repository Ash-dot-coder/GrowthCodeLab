// -------------------------------
// Refactor this code to use Promises
// console.log("Start");

// function getUserDataFromDB(name, callback) {
//   setTimeout(() => {
//     console.log("Getting User Name...");
//     callback(name);
//   }, 2000);
// }

// function getUserHobbies(name, callback) {
//   setTimeout(() => {
//     console.log("Getting User Hobbies...");
//     callback([
//       "Playing Vollyball",
//       "Reading Manga",
//       "Watching Anime",
//       "Coding",
//     ]);
//   }, 2000);
// }

// getUserDataFromDB("Ash", (data) => {
//   console.log(data);
//   getUserHobbies(data, (hobby) => {
//     console.log(hobby);
//   });
// });

// console.log("End");
// -------------------------------

console.log("Start");

function getUserDataFromDB(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Valid Name");
      resolve(name);
    }, 2000);
  });
}

function getUserHobbies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting user hobbies...");
      resolve(["Football", "Cooking", "Workout"]);
    }, 2000);
  });
}

getUserDataFromDB("Ash")
  .then((name) => getUserHobbies(name))
  .then((hobby) => console.log(hobby))
  .catch((err) => console.log(err));

console.log("End");
// -------------------------------
