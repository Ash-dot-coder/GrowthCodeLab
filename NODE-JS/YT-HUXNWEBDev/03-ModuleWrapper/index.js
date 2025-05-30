// console.log("Hello Module Wrapper");

// Behind the scene
(function (exports, require, module, __filename, __dirname) {
  console.log("Hey Module");
})(); // If you wanna call it

console.log(`Directory Name: ${__dirname}`);
console.log(`file Name: ${__filename}`);
console.log(module);
