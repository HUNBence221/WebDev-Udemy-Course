// Making an array:
const colors = ["red", "orange", "yellow"];




// Arrays are indexed like strings:
colors[0]; // "red"
let students = ["John", "Mary", "Bob"];
students[1]; // "Mary"
let lottoNums = [19, 22, 56, 12, 51]
let stuff = [true, 68, 'cat', null]

let days = ["Monday", "Tuesday", "Wednesday"];




// They have a length:
colors.length; //3
days.length; // 3

// "monday"[0]; // "m"
days[2] // Wednesday
days[3] // undefined
days[1][0] // T

let colors2 = ["rad", "orange", "green", "yellow"];

colors2[0] = "red"; // changes the first element
colors2[2] = "yellow"; // changes the third element
colors2[3] = "green" // changes the fourth element
colors2[4]; // undefined
colors2[4] = "blue"; // adds a new element to the end of the array





// Important array methods:





//push(value) - adds value to the END of an array
//pop() - removes and returns last value in array
let movieLine = ["John", "Mary"];
movieLine.push("Bob"); // ["John", "Mary", "Bob"]
movieLine.pop("Bob"); // ["John", "Mary"]
let barbell = [];
barbell.push(45); // [45]
barbell.push(45); // [45, 25]
barbell.push(25); // [45, 25, 25]
barbell.push(10); // [45, 25, 25, 10]
barbell.push(2.5); // [45, 25, 25, 10, 2.5] 
barbell.pop() // [45, 25, 25, 10]
barbell.pop(); // [45, 25, 25]
barbell.pop(); // [45, 25]





//unshift(val) - adds value to START of an array
//shift() - removes and returns first element in an array

let movieLine2 = ["Tom", "Nancy", "Pablo", "Oliver", "Eva"];
movieLine2.shift(); // removes "Tom"
let nextPatron = movieLine2.shift();
nextPatron // removes "Nancy"
nextPatron // removes "Pablo"
movieLine2 // ["Oliver", "Eva"]
movieLine2.unshift("Tom"); // ["Tom", "Oliver", "Eva"]
movieLine2.unshift("Nancy"); // ["Nancy", "Tom", "Oliver", "Eva"]





//concat() - combines two arrays, but doesn't modify either
let first = ["a", "b", "c"];
let second = ["d", "e", "f"];
let third = first.concat(second); // ["a", "b", "c", "d", "e", "f"]





//includes(val) - returns true if array contains value
let cats = ["blue", "kitty"];
cats.includes("blue"); // true
cats.includes("Blue"); // false
cats.includes("red"); // false





//indexOf(val) - returns index of first occurrence of value, or -1 if not found
let comboParty = ["rusty", "wyatt", "blue", "kitty"];
comboParty.indexOf("blue"); // 2
comboParty.indexOf("rusty"); // 0
comboParty.indexOf("rrusty"); // -1





//reverse() - reverses the order of an array !!IT MODIFIES THE ARRAY!!
let nums = [1, 2, 3, 4, 5];
nums.reverse(); // [5, 4, 3, 2, 1]






//slice(start[, end]) - returns a shallow copy of a portion of an array (doesn't include the stop index)
let colors3 = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
colors3.slice(0); // ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
colors3.slice(2); // ["yellow", "green", "blue", "purple", "pink"]
colors3.slice(2, 5); // ["yellow", "green", "blue"] 
let coolColors = colors3.slice(2, 5); // ["yellow", "green", "blue"]
coolColors // ["yellow", "green", "blue"]
colors3 // ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
colors3.slice(-3); // ["purple", "pink", "blue"]





//splice(start, deleteCount[, item1[, item2[, ...]]]) - changes contents of an array by removing or replacing existing elements and/or adding new elements in place !!IT MODIFIES THE ARRAY!!
let colors4 = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
colors4.splice (5, 1); // ["red", "orange", "yellow", "green", "blue", "pink"]
colors4 // ["red", "orange", "yellow", "green", "blue", "pink"]
colors4.splice(1, 0, "red-orange"); // ["red", "red-orange", "orange", "yellow", "green", "blue", "pink"]
colors4.slice(3, 0, "yellow-green", "forestgreen"); // ["red", "red-orange", "orange", "yellow-green", "forestgreen", "yellow", "green", "blue", "pink"]





//sort() - sorts the elements of an array in place and returns the sorted array
let scores = [1, 70, 100, 2500, 9, -12, 0, 34];
scores.sort(); // [-12, 0, 1, 100, 2500, 34, 70, 9]

const nums2 = [1,2,3];
nums2.push(4); // [1, 2, 3, 4]
nums2 = [1,2,3,4]; // error, const variables cannot be reassigned (it looks like the same value, but it's stored differently in memory)





// Nested arrays
const colorss = [
  ["red", "crimson"],
  ["orange", "dark orange"],
  ["yellow", "golden rod"],
  ["green", "olive"],
  ["blue", "navy blue"],
  ["purple", "orchid"],
]

const board = [
["0", null, "X"],
[null, "X", "O"],
["X", "O", null],
]