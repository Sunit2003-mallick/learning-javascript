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
