// we have two types to declare objects in JavaScript: 
            // object literals and constructor

/*
// object literal
const person = {
    name: "Sam",
    age: 25,
    location: "New York",
    email: "sam@example.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Wednesday"]
};
console.log(person["email"]); // sam@example.com
*/

/*
// declare symbol in object
const mySym = Symbol("key1");
const anotherPerson = {
    [mySym]: "This is a symbol key"
};
console.log(anotherPerson[mySym]); // This is a symbol key
console.log(anotherPerson); // { [Symbol(key1)]: 'This is a symbol key' }
*/

/*
// change the value of an object property
person.age = 30;
person.email = "sam.updated@example.com";

// lock the values of an object using Object.freeze()
Object.freeze(person);
person.age = 35; // This will not change the age property
person.email = "sam.frozen@example.com"; // This will not change the email property
console.log(person); 
*/

// declare function with object
const person = {
    name: "Sam",
    age: 25,
    location: "New York",
    email: "sam@example.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Wednesday"]
};

person.greeting = function() {
    console.log("Hello js User");
}
person.greetingTwo = function() {
    console.log(`Hello js User, ${this.name}`);
}

console.log(person.greeting()); // Hello js User
console.log(person.greetingTwo()); // Hello js User, Sam
