// ********* Synchronous:
// function myFunc() {
//   console.log("Inside Function");
// }
// console.log("Start");
// myFunc();
// console.log("End");

// ********* Asynchronous:
console.log("Start");
setTimeout(() => {
  console.log("Inside SetTimeOut");
}, 3000);
console.log("End");
