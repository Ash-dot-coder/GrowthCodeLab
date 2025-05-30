// CommonJS, every file is module (by default)
//  Modules - Encapsulated Code (Only share minimum)

// Now that we've learned about "module wrapper" that's why we know
// that every file is a module (by default).

const { dost1, dost2, dost3, dost4 } = require("./names");
const { num1, num2, num3, num4 } = require("./numbers");
const greetings = require("./greetings");
const calculate = require("./calculate");

// -----> Greeting
// greetings(dost1)
greetings(dost3)
greetings(dost2)

// -----> Names
// console.log(dost1);
// console.log(dost2);
// console.log(dost3);
// console.log(dost4);

// -----> Numbers
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);

// -----> Calculate
calculate(43, 7)