function reverseString(str) {
  // Create an empty stack
  const stack = [];

  // Push each character of the string onto the stack
  for (let char of str) {
    stack.push(char);
  }

  // Initialize an empty string to store the reversed string
  let reversedStr = "";

  // Pop characters from the stack and build the reversed string
  while (stack.length > 0) {
    reversedStr += stack.pop();
  }

  // Return the reversed String
  return reversedStr;
}

const originalString = "Hello World!";
const reversedString = reverseString(originalString);
console.log(reversedString);
console.log(reverseString("Meauktynsa"));
console.log(reverseString("theLegendProgrammer"));
