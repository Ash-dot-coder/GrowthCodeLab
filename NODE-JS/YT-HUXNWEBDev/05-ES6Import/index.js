// New way to import stuff.

// If we write code like this our compiler will gives us error ⚠️
// If you wanna use modern import statement in your projects there are
// two ways you can use that.

//  1️⃣ Change the file name from .js to (.mjs)
// If you change the extention to .mjs you will no longer have
// access to (require(thing)) (__dirname) (__filename) etc.
// 2️⃣ change the type to (module) using npm init

import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Get __filename and __dirname in ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// console.log(path.basename(__filename));
console.log(path.basename("c://ash/pathToLearn"));
