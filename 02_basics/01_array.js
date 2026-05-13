/*
const myArr = [0, 1, 2, 3, 4];
const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[0]); // 0
console.log(myArr2[1]); // 2
console.log(myArr.length); // 5
console.log(myArr2.length); // 4
*/

// Array Methods

/*
const myArr = [0, 1, 2, 3, 4];
myArr.push(5);
myArr.push(6);
console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]
myArr.pop();
console.log(myArr); // [0, 1, 2, 3, 4, 5]
*/

/*
const myArr = [0, 1, 2, 3, 4];
myArr.unshift(9);
console.log(myArr); // [9, 0, 1, 2, 3, 4]
myArr.shift();
console.log(myArr); // [0, 1, 2, 3, 4]

const newArr = myArr.join()

console.log(myArr); // [0, 1, 2, 3, 4] - type - object
console.log(newArr); // "0,1,2,3,4" - type - string
*/

// slice and splice

const myArr = [0, 1, 2, 3, 4];
console.log("A ",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C ", myArr);
