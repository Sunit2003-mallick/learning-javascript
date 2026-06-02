const user = {
    username: "sunit",
    price: 100,

    welcomeMessage: function() {
        console.log(`Welcome ${this.username}`);
        //console.log(this);
        
    }
}
//user.welcomeMessage(); //Welcome sunit
//user.username = "sunit kumar";
//user.welcomeMessage(); //Welcome sunit kumar

//console.log(this); // in global scope this will point to the window object in browser and in node it will point to an empty object

//Arrow function does not have its own this keyword, it will take the this value from the surrounding scope



// const chai = function() {
//     let username = "sunit";
//     console.log(this.username);
// }
// chai(); //undefined



// const chai = () => {
//     let username = "sunit";
//     console.log(this.username);
// }
// chai(); //undefined


// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(5, 10)); //15


// const addTwo = (num1 , num2) => num1 + num2; // if we have only one line of code then we can omit the return keyword and the curly braces
// console.log(addTwo(5, 10)); //15

// const addTwo = (num1 , num2) => (num1 + num2)
// console.log(addTwo(5, 10)); //15

