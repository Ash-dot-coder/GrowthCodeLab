function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`${number} is an even number.`);
    } else {
      reject(`${number} is an odd number.`);
    }
  });
}

const numberToCheck = 12000000000000;

checkNumber(numberToCheck)
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// --------------------------
// Refectoring the previous example to use (Promises)
// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const data = "Inside (callbackHell) Function";
//     }, 2000);
//   });
// }

// function firstFunc(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const processedData = `${data} - Processed First`;
//       console.log("Inside (firstFunc) Function");
//       resolve(processedData);
//     }, 1000);
//   });
// }

// function secondFunc(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const processedData = `${data} -  Processed Second`;
//       console.log("Inside (secondFunc) Function");
//       resolve(processedData);
//     }, 1500);
//   });
// }

// fetchData()
//   .then((data) => firstFunc(data))
//   .then((processedData1) => secondFunc(processedData1))
//   .then((processedData2) => {
//     console.log(
//       `Final result of all functions with Promises: ${processedData2}`
//     );
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
// --------------------------