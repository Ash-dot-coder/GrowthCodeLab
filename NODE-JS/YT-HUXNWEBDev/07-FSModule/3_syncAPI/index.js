// File System - Sync API
import * as fs from "fs";

// 1. Creating Directory: "mkdirSync"
// fs.mkdirSync(
//   "C:\\Geekster - Practice\\OWN-Practice\\node-js\\yt-huxnwebdev\\07-fsmodule\\3_syncapi\\filesystem"
// );

// 2. Creating Directory - Path not required: "mkdirSync"
// fs.mkdirSync(
//   "C:\\Geekster - Practice\\OWN-Practice\\node-js\\yt-huxnwebdev\\07-fsmodule\\3_syncapi\\test\\demo",
//   { recursive: true }
// );

// 3. Read Content of Directory: "readdirSync"
// const files = fs.readdirSync(
//   "C:\\Geekster - Practice\\OWN-Practice\\node-js\\yt-huxnwebdev\\07-fsmodule\\3_syncapi\\"
// );
// for (const file of files) {
//   console.log(file);
// }

// 4. Remove Directory - Directory should be empty: "rmdirSync"
// fs.rmdirSync(
//   "C:\\Geekster - Practice\\OWN-Practice\\node-js\\yt-huxnwebdev\\07-fsmodule\\3_syncapi\\info.txt"
// );

// 5. Create & Write File: "writeFileSync"
// fs.writeFileSync("readme.md", "Hey my Sync..");

// 6. Read File: "readFileSync"
// const result = fs.readFileSync("readme.md", "utf-8");
// console.log(result);

// 7. Append data into file: "appendFileSync"
// fs.appendFileSync("readme.md", " Okay.. i'm here again!");

// 8. Copy File: "copyFileSync"
// fs.copyFileSync("readme.md", "info.txt");

// 9. Get File Information: "statSync"
const stats = fs.statSync("index.js");
console.log("isDirectory: " + stats.isDirectory());
console.log("isFile: " + stats.isFile());
console.log("Stats: " + stats);

// 10. Remove files: "unlinkSync" - forEach(If array based)
// const filesToDelete = [
//   "C:\\Geekster - Practice\\OWN-Practice\\node-js\\yt-huxnwebdev\\07-fsmodule\\3_syncapi\\info.txt",
//   "C:\\Geekster - Practice\\OWN-Practice\\node-js\\yt-huxnwebdev\\07-fsmodule\\3_syncapi\\readme.md",
// ];

// filesToDelete.forEach((filePath) => {
//   fs.unlinkSync(filePath);
// });