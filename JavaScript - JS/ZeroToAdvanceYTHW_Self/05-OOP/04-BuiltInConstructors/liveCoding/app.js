// Built-in constructors, also known as native constructors, are standard constructors provided by JavaScript that allow you to create objects of various data types.
//  These constructors are available globally and do not need to be explicitly defined. They provide a convenient way to create instances of primitive data types and built-in objects.

// --> Number Constructor:
const num1 = new Number(42);
console.log("Number Constructor:");
console.log(typeof num1);
console.log(num1.valueOf());

const num2 = 7;
console.log(typeof num2);

// --> String Constructor:
const str1 = new String("Hello");
console.log("String Constructor:");
console.log(typeof str1);
console.log(str1.valueOf());

const str2 = "World";
console.log(typeof str2);

// --> Boolean Constructor:
console.log("Boolean Constructor:");
const bool1 = new Boolean(true);
console.log(typeof bool1);
console.log(bool1.valueOf());

const bool2 = false;
console.log(typeof bool2);

// --> Array Constructor:
console.log("Array Constructor:");
const arr1 = new Array(1, 2, 3);
console.log(arr1);
console.log(Array.isArray(arr1));

const arr2 = ["One", "Two", "Three"];
console.log(arr2);
console.log(Array.isArray(arr2));

// --> Object Constructor:
console.log("Object Constructor:");
const mangaObj = new Object();
mangaObj.mangaTitle = "Vinland Saga";
mangaObj.volume = 28;
console.log(mangaObj);

const animeObj = { animeTitle: "Attack On Titan", season: 4 };
console.log(animeObj);

// ....
