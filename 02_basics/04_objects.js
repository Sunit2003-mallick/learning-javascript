//const tinderUser = new Object() // output: {} , this is a singleton object
const tinderUser = {} // output: {} , this is not a singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedin = false

//console.log(tinderUser);

const regularUser = {
    email: "regular@example.com",
    fullname: {
        userfullname: {
            firstname: "John",
            lastname: "Doe"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
//const obj3 = {obj1, obj2} // output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//const obj3 = Object.assign({},obj1, obj2) // output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } , this is a way to merge two objects into one object
const obj3 = {...obj1, ...obj2} // output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } , this is a way to merge two objects into one object using spread operator
//console.log(obj3);



const users = [
     
];
//console.log(users);

console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedin: false }

console.log(Object.keys(tinderUser)); // output: [ 'id', 'name', 'isLoggedin' ] , this is a way to get the keys of an object as an array
console.log(Object.values(tinderUser)); // output: [ '123abc', 'Sammy', false ] , this is a way to get the values of an object as an array
console.log(Object.entries(tinderUser)); // output: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedin', false ] ] , this is a way to get the key-value pairs of an object as an array of arrays

console.log(tinderUser.hasOwnProperty('isLoggedin')); // output: true , this is a way to check if an object has a property or not
