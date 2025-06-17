// FS Promise API
import * as fs from "fs/promises";

// 1. Creating Directory - Path should be there. 🥂
// // try {
// //     await fs.mkdir("C:/Geekster - Practice/OWN-Practice/node-js/yt-huxnwebdev/07-fsmodule/1_promiseapi/fs");
// //     console.log("Directory Created ...");
// // } catch (error) {
// // console.log(error);
// }

// 2. Path is not requried 🥂
// try {
//     await fs.mkdir("C:/Geekster - Practice/OWN-Practice/node-js/yt-huxnwebdev/07-fsmodule/1_promiseapi/fs/index", {recursive: true})
//     console.log("Directory Created ...");
// } catch (error) {
// console.log(error);
// }

// 3. Read content of directory 🥂
// try {
//     const files = await fs.readdir("C:/Geekster - Practice/OWN-Practice/node-js/yt-huxnwebdev/07-fsmodule/1_promiseapi/fs/index")
//     for(let file of files){
//         console.log(file);
//     }
// } catch (error) {
// console.log(error);
// }

// 4. Remove File 🥂
// try {
//     await fs.unlink("C:/Geekster - Practice/OWN-Practice/node-js/yt-huxnwebdev/07-fsmodule/1_promiseapi/fs/copyInfo.txt")
//     console.log("File Removed ...");
// } catch (error) {
// console.log(error);
// }

// 5. Remove Directory 🥂
// try {
//     await fs.rm("C:/Geekster - Practice/OWN-Practice/node-js/yt-huxnwebdev/07-fsmodule/1_promiseapi/fs", {
//             recursive:true,
//             force: true
//         });
//     console.log("Directory Removed...");
// } catch (error) {
// console.log(error);
// }

// 6. Create and Write file 😊
// try {
//     await fs.writeFile("readme.md", "Hey NodeJs :)");
//     console.log("Readme file written..");
// } catch (error) {
//     console.log(error);
// }

    
// 7. Read File 😊
// try {
//     const data = await fs.readFile("readme.md");
//     console.log(data);  //  returns buffer⚠️
// } catch (error) {
// console.log(error);
// }

// try {
//     const data = await fs.readFile("readme.md", "utf-8");   //  Actual Data
//     console.log(data);
// } catch (error) {
// console.log(error);
// }

// 8. Append Data Into File
// try {
//     await fs.appendFile("readme.md", "Hey Ash!");
//     console.log("File Appended ..");
// } catch (error) {
// console.log(error);
// }

// 9. Copy File 😊
// try {
//     await fs.copyFile("readme.md", "C:/Geekster - Practice/OWN-Practice/node-js/yt-huxnwebdev/07-fsmodule/1_promiseapi/fs/copyInfo.txt")
//     await fs.copyFile("readme.md", "copyInfo.txt");
//     console.log("File Copied");
// } catch (error) {
// console.log(error);
// }

// 10. Get File Information 😊
try {
    const info = await fs.stat("C:/Geekster - Practice/OWN-Practice/node-js/yt-huxnwebdev/07-fsmodule/1_promiseapi/index.js");
    console.log(info);  //  returns object
    console.log("Is Directory: " + info.isDirectory());
    console.log("Is File: " + info.isFile());
} catch (error) {
console.log(error);
}


// 11. Removed All : Readme and CopyInfo 🥂
// try {
//     await Promise.all([
//             fs.unlink("C:/Geekster - Practice/OWN-Practice/node-js/yt-huxnwebdev/07-fsmodule/1_promiseapi/copyInfo.txt"),
//             // fs.unlink("C:/Geekster - Practice/OWN-Practice/node-js/yt-huxnwebdev/07-fsmodule/1_promiseapi/readme.md")
//         ]);
//     console.log("CopyInfo & Readme File Removed!");
// } catch (error) {
// console.log(error);
// }