// ------------- Example 1
function countDown(number) {
  if (number === 0) {
    console.log("And finally the stopping point!");
    return;
  }

  console.log(number);
  countDown(number - 1);
}

countDown(7);

// ------------ Example 2
function factorial(num) {
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
  //   return num === 0 ? 1 : num * factorial(num - 1);
}

console.log(factorial(8));
