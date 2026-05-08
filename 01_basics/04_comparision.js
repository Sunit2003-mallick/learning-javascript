/*
console.log(2 > 1); //true
console.log(2 < 1); //false
console.log(2 >= 1); //true
console.log(2 == 1); //false
console.log(2 != 1); //true
console.log(2 !== 1); //true
*/

console.log("2" > 1); //true
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false    
console.log(undefined < 0); //false

/*
console.log("2" == 2); //true
console.log("2" === 2); //false

== (Loose Equality)
Compares values only
Performs type conversion (type coercion) 
automatically before comparing.

=== (Strict Equality)
Compares both value and data type
Does NOT perform type conversion.
*/
