// if (2 === "2") {
//     console.log("executed");
// } else {
//     console.log("not executed");
// }


/*
// important Notes :-

//falsy values in JavaScript are: 
   // false, 0, -0, BigInt 0n, "", null, undefined, and NaN.

// truthy values in JavaScript are:
   // true, "0", "false"," ", [], {}, function(){}, any non-zero number, any non-empty string, any object, and any array.

*/

// userEmail = "";
// if (userEmail.length ===  0) {
//     console.log("Array is empty");
// }


const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


/*
 Nulish Coalescing Operator (??) :-
 it is used to provide a default value when the left-hand side operand is 
 null or undefined. It returns the right-hand side operand when the left-hand side 
 operand is null or undefined, otherwise it returns the left-hand side operand.
 
let val1;
//val1 = 5 ?? 10;// returns 5
//val1 = null ?? 10;// returns 10
//val1 = undefined ?? 10;// returns 10
console.log(val1);
*/

/*
//Ternary Operator (?:) :-
//condition ? value_if_true : value_if_false
 it is a shorthand way to write an if-else statement. 
 It takes three operands: a condition, a value to return if the condition is true, 
 and a value to return if the condition is false.
*/
let age = 25;
let message = age >= 18 ? "You are an adult." : "You are not an adult.";
console.log(message);