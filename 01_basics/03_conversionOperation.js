/*
let score = 33
console.log(typeof score); //number
console.log(typeof(score)); //number
*/

/*
let score = "33"
console.log(typeof score); //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //33
*/

/*
let score = "33ab"
console.log(typeof score); //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN
*/

/*
let score = null
console.log(typeof score); //object

let valueInNumber = Number(score)
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //0
*/

/*
let score = undefined
console.log(typeof score); //undefined

let valueInNumber = Number(score)
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN
*/

/*
let score = true
console.log(typeof score); //boolean

let valueInNumber = Number(score)
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //1
*/

/*
"33" => 33
"33ab" => NaN
null => 0
undefined => NaN
1 => true , 0 => false
"" => false
"sunit" => true
*/

/*
let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber); //string
console.log(stringNumber); //33
*/


// ********* Operations *********

/*
let value = 4
let negvalue = -value
console.log(negvalue); //-4
*/

/*
let str1 = "sunit"
let str2 = " mallick"
let str3 = str1 + str2
console.log(str3); //sunit mallick
*/

/*
console.log(1 + 2); //3
console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32
*/

let gameCounter = 100
gameCounter++;
console.log(gameCounter); //101
