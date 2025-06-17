// File Stystem - Callback API
import { error } from "console";
import * as fs from "fs";

// 1. Creating Directory : "mkdir"
// fs.mkdir(
//   "C:\\Geekster - Practice\\OWN-Practice\\node-js\\yt-huxnwebdev\\07-fsmodule\\2_callbackapi\\filesystem",
//   (error) => {
//     if (error) throw error;
//     console.log("Directory Created...");
//   }
// );

// 2. Creating Directory - Path not required : "mkdir"
// fs.mkdir(
//   "C:Geekster - PracticeOWN-Practice\\node-jsyt-huxnwebdev\\07-fsmodule\\2_callbackapi\\testdemo",
//   { recursive: true },
//   (error) => {
//     if (error) throw error;
//     console.log("Directory Created..");
//   }
// );

// 3. Read content of directory : "readdir"
// fs.readdir(
//   "C:\\Geekster - Practice\\OWN-Practice\\node-js\\yt-huxnwebdev\\07-fsmodule\\2_callbackapi",
//   (error, files) => {
//     if (error) throw error;
//     for (const file of files) {
//       console.log(file);
//     }
//   }
// );

// 4. Remove Directory - Directory should be empty. "rmdir"
// fs.rmdir(
//   "C:\\Geekster - Practice\\OWN-Practice\\node-js\\yt-huxnwebdev\\07-fsmodule\\2_callbackapi\\f",
//   (error) => {
//     if (error) throw error;
//     console.log("Directory Removed");
//   }
// );

// 5. Create & Write File : "writeFile"
// fs.writeFile("readme.txt", "Hey NodeJs", (error) => {
//   if (error) throw error;
//   console.log("File Created ..");
// });

// 6. Read File : "readFile"
// fs.readFile("readme.txt", "utf-8", (error, data) => {
//   if (error) throw error;
//   console.log(data);
// });

// 7. Append Data into file : "appendFile"
// fs.appendFile("readme.txt", "Ash Coder", (error) => {
//   if (error) throw error;
//   console.log("Data Appended..");
// });

// 8. Copy file : "copyFile"
// fs.copyFile("readme.txt", "info.txt", (error) => {
//   if (error) throw error;
//   console.log("File Copied..");
// });

// 9. Get File Information : "stat"
// fs.stat("info.txt", (error, stats) => {
//   if (error) throw error;
//   console.log("isDirectory: " + stats.isDirectory());
//   console.log("isFile: " + stats.isFile());
// });

// 10.
const fileToDelete = [
  "C:\\Geekster - Practice\\OWN-Practice\\node-js\\yt-huxnwebdev\\07-fsmodule\\2_callbackAPI\\info.txt",
  "C:\\Geekster - Practice\\OWN-Practice\\node-js\\yt-huxnwebdev\\07-fsmodule\\2_callbackAPI\\readme.txt",
];

fileToDelete.forEach((filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting ${filePath}:`, err.message);
    } else {
      console.log(`Successfully deleted: ${filePath}`);
    }
  });
});
