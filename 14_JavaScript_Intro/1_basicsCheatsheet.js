// Numbers:
// JS has only one number type: Number
// It can be an integer (whole numbers) or a float (decimal numbers)

1;
-99;
0.345345;

// modulo (%)
9 % 2; // 1
19 % 4; // 3 how many times does the 4 go into the 19? 4*4=16 19-16=3 19%4=3

// Power operator (**)
2 ** 4; // 16 (2*2*2*2)
9 ** 3; // 729 (9*9*9)


//Making variables with let:
let numberOfFriends = 1;
let year = 1985;
let numHens = 5;
let numRoosters = 1;
numHens + numRoosters; // 6
let totalChickens = numHens + numRoosters; // 6

let score = 0; //score is 0
score += 5; //score is now 5
score += 10; //score is now 15
score -= 3; //score is now 12
score *= 2; //score is now 24
score /= 3; //score is now 8

let numLives = 9;
numLives++; //numLives is now 10
numLives--; //numLives is now 9

// Variables with const
const minimumAge = 21; //CANNOT REASSIGN!

//Booleans - true or false values
true;
false;
let isHappy = true;
let isActiveGame = true;
let isLoggedIn = false;

//Naming Conventions
// Use upper camel-cased names:
let numberOfChickens = 6; //GOOD
// NOT THE JS WAY:
// let number_of_chickens = 6;

// i++ vs ++i
// i++ is post-increment: returns the value before incrementing
let i = 0;
i++; // i is now 1
// ++i is pre-increment: increments the value before returning it
let j = 0;
++j; // j is now 1
// ++j returns 1
let k = 5;
++k; // k is now 6