/*
let myDate = new Date()
console.log(myDate); // Output: 2026-05-12T03:37:04.036Z
console.log(myDate.toString()) // Output: Tue May 12 2026 09:05:24 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Output: Tue May 12 2026
console.log(myDate.toLocaleString()); // Output: 12/5/2026, 9:09:11 am

console.log(typeof myDate); // Output: object
*/


/*
let myCreatedDate = new Date(2026, 0, 12);
console.log(myCreatedDate.toDateString()); // Output: Mon Jan 12 2026

let myCreatedDate2 = new Date(2026, 0, 12, 5, 4);
console.log(myCreatedDate2.toLocaleString()); // Output: 12/1/2026, 5:04:00 am

let myCreatedDate3 = new Date("2026-01-12");
console.log(myCreatedDate3.toLocaleString()); // Output: 12/1/2026, 12:00:00 am
*/
let myCreatedDate3 = new Date("2026-01-12");


// ++++++ Timestamp ++++++

let myTimeStamp = Date.now()
// console.log(myTimeStamp); 
// console.log(myCreatedDate3.getTime()); 

//console.log(Math.floor(Date.now() / 1000)); // Output: 1735680000

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());


// string interpolation => `${}`
console.log(`The current month is: ${newDate.getMonth() + 1}`); // Adding 1 because getMonth() returns 0-11

newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric"
})