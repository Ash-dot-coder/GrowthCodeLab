// for of loop
// Note: You can use the "for of" loop to iterate over any iterable object, like arrays, strings, sets, etc.

const fullName = 'Ayush Kohre';
const ids = [3, 4, 2, 1, 6];

for (const iterator of fullName) {
    console.log("\t" + iterator);
}
console.log("\n");
// Output : A y u s h  K o h r e

for (const iterator of ids) {
    console.log("\t" + iterator);
}
// Output: 3 4 2 1 6