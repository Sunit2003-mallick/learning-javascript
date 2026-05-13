const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "batman", "flash"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros); // ["thor", "ironman", "spiderman", ["superman", "batman", "flash"]]
// console.log(marvel_heros[3][1]); // "batman"

/*
const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros); // ["thor", "ironman", "spiderman", "superman", "batman", "flash"]

            // or

// most used
const all_heros2 = [...marvel_heros, ...dc_heros];
console.log(all_heros2); // ["thor", "ironman", "spiderman", "superman", "batman", "flash"]
*/

/*
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]];
// const real_array = another_array.flat(1); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, [4,5]]
// const real_array = another_array.flat(2); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
const real_array = another_array.flat(Infinity); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
console.log(real_array); 
*/


/*

// most important array methods for interview

console.log(Array.isArray("Sunit")); // false
console.log(Array.from("Sunit")); // ["S", "u", "n", "i", "t"]
console.log(Array.from({name: "sunit"})); // []
// if we want to convert object to array we can use Object.values() or Object.keys() or Object.entries()
console.log(Object.values({name: "sunit", age: 25})); // ["sunit", 25]
console.log(Object.keys({name: "sunit", age: 25})); // ["name", "age"]

*/

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]

// important => Array.from() and Array.of() are not the same. 
// Array.from() is used to create an array from an iterable object, 
// while Array.of() is used to create an array from a list of arguments.


// more study about Array.isArray, Array.from, Array.of