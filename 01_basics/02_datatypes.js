"use strict"; 
// treat all js code as newer version

//alert(3 + 3)
 /* 
 this work in browser console not here, 
 because alert is a browser function 
 but we are running this code in node environment.
 */

 /*
    Data types in JavaScript:
    1. Primitive Data Types:
       - String: represents text, enclosed in single or double quotes.
       - Number: represents numeric values, can be integers or floating-point numbers.
                2 to the power of 53 - 1 is the largest number that can be represented in JavaScript.
       - Boolean: represents logical values, can be true or false.
       - Null: represents the intentional absence of any object value.
       - Undefined: represents the absence of a value.
       - Symbol: represents a unique identifier.
       - BigInt: represents large integers.
    2. Non-Primitive Data Types:
       - Object: represents a collection of properties and methods.
       - Array: represents an ordered list of values.
       - Function: represents a reusable block of code that performs a specific task.
 */

       console.log(typeof null); // object (this is a known quirk in JavaScript)
       console.log(typeof undefined); // undefined