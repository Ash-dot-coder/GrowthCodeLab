// 👉Blocking👈
// console.log("Start");
// alert("Block");
// console.log("End");

// 👉NOn-Blocking👈
// console.log("Start");
// setTimeout(() => {
//     alert("Non-Blocking");
// }, 1000);
// console.log("End");

// *********************************

// 📁 Reading File Without Callback (Synchronous)

import fs from "fs"; // Using ES Module syntax

console.log("\n🔒 Sync File Read Started");

const data = fs.readFileSync("test.txt"); // Blocks execution
console.log(data.toString());

console.log("🔓 Sync File Read Ended");

// -----------------------------------

// 📁 Reading File With Callback (Asynchronous)

// console.log("\n🔁 Async File Read Started");

// fs.readFile("test.txt", (err, res) => {
//   //   if (err) {
//   //     console.log("❌ Error reading file:", err);
//   //   } else {
//   //     console.log("✅ File content:", res.toString());
//   //   }

//   err
//     ? console.log("❌ Error reading file:", err)
//     : console.log("✅ File content:", res.toString());
// });

// console.log("🔁 Async File Read Ended (callback will still run above)");
// *********************************
