// 1. Convert string to array (split method)
// 2. Reverse the array (reverse method)
// 3. Convert array back to string (join method)
// 4. Compare strings

// const palindrome = (str) => str.split("").reverse().join("") === str;
// console.log(palindrome("Naab"));
// console.log(palindrome("NaaN"));
// console.log(palindrome("Naan"));
// console.log(palindrome("AaBaA"));
// console.log(palindrome("AaBaN"));

// ----Ex-Own
const palinCheck = (str) => str.split("").reverse().join("") === str;
console.log(palinCheck("deed")); //true
console.log(palinCheck("EdDe")); //false
console.log(palinCheck("EddE")); // true
console.log(palinCheck("DEed")); // false
console.log(palinCheck("OK")); // false
