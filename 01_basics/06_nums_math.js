/*
const score = 400
console.log(score); // Output: 400

const balance = new Number(100);
console.log(balance); // Output: [Number: 100]

console.log(balance.toString().length); // Output: 3
console.log(balance.toFixed(2)); // Output: 100.00

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); // Output: 124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // Output: 10,00,000
*/



// ++++++++++ Maths ++++++++++

/*
console.log(Math); // Output: Object [Math] {}
console.log(Math.abs(-4)); // Output: 4
console.log(Math.round(4.8)); // Output: 5
console.log(Math.ceil(4.2)); // Output: 5
// Rounding down to the nearest upperinteger
console.log(Math.floor(4.2)); // Output: 4
// Rounding down to the nearest lower integer
console.log(Math.min(4, 3, 6, 8)); // Output: 3
console.log(Math.max(4, 3, 6, 8)); // Output: 8
*/

console.log(Math.random());
// Output: A random number between 0 (inclusive) and 1 (exclusive)
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
