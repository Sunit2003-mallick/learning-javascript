const { use } = require("react");

function sayMyName() {
    console.log("s");
    console.log("u");
    console.log("n");
    console.log("i");
    console.log("t");
}
//sayMyName();

/*

//  function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
//  }
//addTwoNumbers(3, 4); //7
//addTwoNumbers(3, "4"); //34
//addTwoNumbers(3, "a"); //3a
//addTwoNumbers(3, null); //3
//addTwoNumbers(3, undefined); //NaN

//const result = addTwoNumbers(3, 4);
//console.log(result); //undefined

*/

//Type - 1
/*
function addTwoNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}
const result = addTwoNumbers(3, 4);
console.log("Result : ", result); //7
*/

//Type - 2
/*
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
const result = addTwoNumbers(3, 4);
console.log("Result : ", result); //7
*/

function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
//console.log(loginUserMessage("sunit")); //sunit just logged in

   //or if the username is not passed then it will return undefined

//console.log(loginUserMessage()); //Please enter a username
                                   //undefined just logged in



function calculateCartPrice(...num1) {
// ... (this we called rest operator or spread operator) it will convert all the arguments into an array
    return num1;
}
//console.log(calculateCartPrice(100, 200, 300, 400)); // [100, 200, 300, 400]

const user = {
    username: "sunit",
    price: 100
}
function handleObject(anyobject) {
    console.log(`Username: ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user); //Username: sunit and price is 100

handleObject({
    username: "sam",
    price: 200
}); //Username: sam and price is 200

const myNewArray = [100, 200, 300, 400];
function returnSecondElement(getarr) {
    return getarr[1]
}
//console.log(returnSecondElement(myNewArray)); //200

        //or
        
console.log(returnSecondElement([100,200,300,400]));
