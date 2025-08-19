// -------------------------------
// Refactor this code to use async/await
// console.log("Start");

// function getUserDataFromDB(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Valid Name");
//       resolve(name);
//     }, 2000);
//   });
// }

// function getUserHobbies() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting user hobbies...");
//       resolve(["Tag", "Long Walk", "Duolingo"]);
//     }, 2000);
//   });
// }

// getUserDataFromDB("Ash")
//   .then((name) => getUserHobbies(name))
//   .then((hobby) => console.log(hobby))
//   .catch((err) => console.log(err));

// console.log("End");

// -------------------------------

// Refactoring
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
      console.log("Getting user Hobbies...");
      resolve(["Playing Tag", "Long Walk", "Duolingo"]);
    }, 2000);
  });
}

async function showUserHobbies() {
  try {
    const name = await getUserDataFromDB("Ash");
    const hobby = await getUserHobbies(name);
    console.log(hobby);
  } catch (error) {
    console.error("Error:", error);
  }
}

showUserHobbies();

console.log("End");
