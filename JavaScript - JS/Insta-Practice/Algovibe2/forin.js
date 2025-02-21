// for in loop
// Note: The "for in" loop is used to iterate over the properties of an object

const person = {
    firstName: 'Ayush',
    lastName: 'Kohre',
    handle: '@ash_25.srk_58',
    field: 'Full Stack Dev',
};

// iterate over an object
for (const key in person) {
    console.log(key); // firstName, lastName, handle, field
    console.log(person[key]); // Ayush, Kohre, @ash_25.srk_58, Full Stack Dev
}