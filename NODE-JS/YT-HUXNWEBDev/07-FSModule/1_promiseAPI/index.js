// FS Promise API
import * as fs from "fs/promises";

// Creating Directory - Path should be there. 🥂
// // try {
// //     await fs.mkdir("C:/Geekster - Practice/OWN-Practice/node-js/yt-huxnwebdev/07-fsmodule/1_promiseapi/fs");
// //     console.log("Directory Created ...");
// // } catch (error) {
// // console.log(error);
// }

// // Path is not requried 🥂
// try {
//     await fs.mkdir("C:/Geekster - Practice/OWN-Practice/node-js/yt-huxnwebdev/07-fsmodule/1_promiseapi/fs/index", {recursive: true})
//     console.log("Directory Created ...");
// } catch (error) {
// console.log(error);
// }

// Read content of directory 🥂
// try {
//     const files = await fs.readdir("C:/Geekster - Practice/OWN-Practice/node-js/yt-huxnwebdev/07-fsmodule/1_promiseapi/fs/index")
//     for(let file of files){
//         console.log(file);
//     }
// } catch (error) {
// console.log(error);
// }

// Remove File 🥂
// try {
//     await fs.unlink("C:/Geekster - Practice/OWN-Practice/node-js/yt-huxnwebdev/07-fsmodule/1_promiseapi/fs/index/hey.txt")
//     console.log("File Removed ...");
// } catch (error) {
// console.log(error);
// }

// Remove Directory 🥂
// try {
//     await fs.rm("C:/Geekster - Practice/OWN-Practice/node-js/yt-huxnwebdev/07-fsmodule/1_promiseapi/fs/index", {
//             recursive:true,
//             force: true
//         });
//     console.log("Directory Removed...");
// } catch (error) {
// console.log(error);
// }

// Create and Write file 😊
// try {
//     await fs.writeFile("readme.md", "Hey NodeJs :)");
//     console.log("Readme file written..");
// } catch (error) {
//     console.log(error);
// }

    
// Read File 😊
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

// Append Data Into File
// try {
//     await fs.appendFile("readme.md", "Hey Ash!");
//     console.log("File Appended ..");
// } catch (error) {
// console.log(error);
// }

// Copy File 😊
// try {
//     await fs.copyFile("readme.md", "C:/Geekster - Practice/OWN-Practice/node-js/yt-huxnwebdev/07-fsmodule/1_promiseapi/fs/copyInfo.txt")
//     await fs.copyFile("readme.md", "copyInfo.txt");
//     console.log("File Copied");
// } catch (error) {
// console.log(error);
// }

// Get File Information 😊
// try {
//     const info = await fs.stat("C:/Geekster - Practice/OWN-Practice/node-js/yt-huxnwebdev/07-fsmodule/1_promiseapi/fs/copyInfo.txt");
//     console.log(info);  //  returns object
//     console.log("Is Directory: " + info.isDirectory());
//     console.log("Is File: " + info.isFile());
// } catch (error) {
// console.log(error);
// }


// Removed All : Readme and CopyInfo 🥂
try {
    await Promise.all([
            fs.unlink("C:/Geekster - Practice/OWN-Practice/node-js/yt-huxnwebdev/07-fsmodule/1_promiseapi/copyInfo.txt"),
            fs.unlink("C:/Geekster - Practice/OWN-Practice/node-js/yt-huxnwebdev/07-fsmodule/1_promiseapi/readme.md")
        ]);
    console.log("CopyInfo & Readme File Removed!");
} catch (error) {
console.log(error);
}