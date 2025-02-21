// do-while loop
// Note: The "do-while" loop gets executed at least once even if the condition is false.

let i = 0;
do {
    // executes once before the condition is checked
    console.log(i + ' Hello JavaScript'); //output : Hello JavaScript

    // increment i or else we'll have an infinite loop
    i++;
} while (i < 8);