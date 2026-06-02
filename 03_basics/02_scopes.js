/*
// var c = 200
let a = 100; //block scope
if (true) {
    let a = 20;
    const b = 30; 
    var c = 50;
    console.log("inner : " , a); // inner : 20
}
console.log(a); //100
console.log(c); //50
*/


function one() {
    const username = "sunit";

    function two() {
        const website = "sunit.com";
        console.log(username);
    }
    //console.log(website);

    two();
    
}

// one();


if (true) {
    const username = "sunit";
    if (username === "sunit") {
        const website = "sunit.com";
        console.log(username + website);
    }
    //console.log(website);
}
// console.log(username);


// +++++++++++ interesting ++++++++++++


function addone(num) {
    return num + 1;
}
console.log(addone(5));

const addTwo = function(num) {
    return num + 2;
}
console.log(addTwo(5));