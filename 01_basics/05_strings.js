const name = "sunit";
const repoCount = 10
console.log(name + repoCount); // Output: sunit10, older way
console.log(`hello my name is ${name} and my repocount is ${repoCount}`); 
// Output: hello my name is sunit and my repocount is 10,modern way, this is called string interpolation


const gameName = new String('msdhoni');

console.log(gameName[0]); // Output: m
console.log(gameName.__proto__); // Output: {}

console.log(gameName.length); // Output: 7
console.log(gameName.toUpperCase()); // Output: MSDHONI
console.log(gameName.charAt(2)); // Output: d
console.log(gameName.indexOf('o')); // Output: 4

const gname = 'ms-dhoni';
const newString = gname.substring(3, 8);
console.log(newString); // Output: dhoni

const anotherString = gname.slice(-4, 8);
console.log(anotherString); // Output: honi
// slice can also take negative index which counts from the end of the string, while substring does not support negative index and will treat it as 0.

const newString1 = "  sunit  ";
console.log(newString1); // Output: "  sunit  "
console.log(newString1.trim()); // Output: "sunit"
//  removes whitespace from both ends of the string
console.log(newString1.trimStart()); // Output: "sunit  "
// removes whitespace from the beginning of the string"
console.log(newString1.trimEnd()); // Output: "  sunit"
// removes whitespace from the end of the string"


const url = "https://www.youtube.com/channel%20ms";
console.log(url.replace('%20','-')); // Output: https://www.youtube.com/channel-ms
// replaces the first occurrence of '%20' with '-'
console.log(url.includes('youtube')); // Output: true


const str1 = new String("Hello-World-JavaScript-Programming");
console.log(str1.split('-')); // Output: ["Hello", "World", "JavaScript", "Programming"]
// splits the string into an array of substrings using '-' as the separator
