// -----------------------
// const groceries = ["milk", "bread", "eggs", "flour", "peanutButter", "jaggery"];

// const searchForItem = (item) => {
//   for (let i = 0; i < groceries.length; i++) {
//     if (groceries[i] === item) {
//       console.log(`Yes ${item} is available.`);
//     }
//   }
// };

// searchForItem("eggs");
// -----------------------

const diet = [
  "milk",
  "wheatBread",
  "peanutButter",
  "dates",
  "banana",
  "eggs",
  "peanuts",
  "jaggery",
];

const searchForItem = (item) => {
  for (let i = 0; i < diet.length; i++) {
    if (diet[i] === item) {
      console.log(`Yes, you can add '${item}'`);
    }
  }

  for (let j = 0; j < diet.length; j++) {
    if (diet[j] === item) {
      console.log(`Yes you can add '${item}' too`);
    }
  }

  // n + n = 2n  -> O(2n)
  // Drop  the constant so it becomes O(n)
};

searchForItem("jaggery");
