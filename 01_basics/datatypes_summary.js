/*
 according to how to store or access the data , 
 we have 2 types of data types in JavaScript.
 1. Primitive Data Types
 2. Reference/Non-Primitive Data Types
 */

/*
Primitive Data Types:
1. String: represents text, enclosed in single or double quotes.
2. Number: represents numeric values, can be integers or floating-point numbers.
3. Boolean: represents logical values, can be true or false.
4. Null: represents the intentional absence of any object value or 
   a non-existent value or an empty value but not Zero(0) or an empty string ("").
5. Undefined: represents the absence of a value or 
   we declare a variable or take the memory space but do not assign any value to it.
6. Symbol: represents a unique identifier.
7. BigInt: represents large integers.
*/

/* Examples of Primitive Data Types:
1. const name = "sunit" //typeof = string
2. const score = 100 //typeof = number
   const scoreValue = 100.2 //typeof = number
3. const isLoggedIn = true //typeof = boolean
4. const outsideTemp = null //typeof = object
5. let userEmail; //typeof = undefined
6. const id = Symbol("123") //typeof = symbol
   const anotherId = Symbol("123") //typeof = symbol
7. const bigNumber = 9007199254740991n //typeof = bigint
*/


/*
Reference/Non-Primitive Data Types:

1. Array: represents an ordered collection of values.
2. Object: represents a collection of properties and methods.
3. Function: represents a block of code that can be executed.
*/

/* Examples of Reference/Non-Primitive Data Types:
1. const heros = ["sunit", "Mahi", "Rutu"]; //typeof = object
2. let myObj = { 
    name: "sunit", 
    age: 30 
  };                                     //typeof = object 
3. let myFunc = function() {
    console.log("This is a function");
  }                                     //typeof = function
*/

 