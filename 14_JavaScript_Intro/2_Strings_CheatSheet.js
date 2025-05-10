// Making Strings - textiual strings of informations, has to be between ' or " or `
let favColor = "purple";

// Single quotes work too:
let city = 'Tokyo'; 

//Strings have a length:
city.length; //5

//We can access specific characters using their index:
city[0]; //'T'
city[3]; //'y'



// String methods:
'hello'.toUpperCase(); // "HELLO";
let message = "leave me alone right now i hate you plz";
let angryMsg = "LEAVE ME ALONE RIGHT NOW I HATE YOU PLZ";
angryMsg.toLowerCase(); // "leave me alone right now i hate you plz"
msg.toUpperCase(); // "LEAVE ME ALONE RIGHT NOW I HATE YOU PLZ"

'LOL'.toLowerCase(); // "lol"
'    omg  '.trim(); // "omg"
let userInput = "   hello my name is tim tom tammy  ";
userInput.trim(); // "hello my name is tim tom tammy" - removes whitespace from both ends
// You can also chain methods together:
let greeting = " hello again!!!!          ";
greeting.trim().toUpperCase(); // "HELLO AGAIN!!!!"



// String methods with arguments:
// syntax - thing.method()

//indexOf returns the index where the character is found (or -1 if not found)
'spider'.indexOf('i'); //2
'vesuvius'.indexOf('u'); //3 - only returns FIRST matching index
'cactus'.indexOf('z'); //-1 not found

// slice - returns a "slice" of a string
// syntax - string.slice(startIndex[, endIndex]) [] means optional
"pancake".slice(3); //"cake" - slice from index 3 onwards
"haha that is soo funny!".slice(5); //"that is soo funny!" 
let messagee = "that is sooo funny!";
messagee.slice(5); //"that is sooo funny!" 
messagee.slice(5, 10); //"that " - slice from index 5 up to index 10
"pancake".slice(0, 3); //"pan" - slice from index 0 up to index 3

// replace - returns a new string, with the FIRST match replaced
"pump".replace("p", "b"); //"bump" - only replaces first "p"
messagee.replace('haha', 'lolololol'); //"lolololol that is sooo funny!"

"lol".repeat(3); //"lollollol" - repeats the string 3 times

// String Template Literals
// Use backtick characters, NOT SINGLE QUOTES!
const bestColor = "olive green";
const msg = `My favorite color is: ${color}` //"My favorite color is: olive green"

const str = `There are ${60 * 60 * 24} seconds in a day`//"There are 86400 seconds in a day"

let product = "Artichoke";
let price = 2.25;
let qty = 5;
"You bought " + qty + " " + product + ". Total is " + price * qty + ".";
// "You bought 5 Artichoke. Total is 11.25."
// Template literal version:
`You bought ${qty} ${product}. Total is $${price * qty}.`;
// "You bought 5 Artichoke. Total is $11.25."

// Math objects
Math.floor(3.9); //3 - rounds down
Math.ceil(3.9); //4 - rounds up
Math.round(3.9); //4 - rounds to nearest whole number
Math.random(); //returns a random number between 0 and 1
// random number between 0 and 10
let step1 = Math.random(); //0.123456789
let step2 = step1 * 10; //6.23456789
let step3 = Math.floor(step2); //6
let step4 = step3 + 1; //7
// random number between 20 and 22
let stepOne = step1 * 3; //0.37037037
let stepThree = Math.floor(step2); //0
let stepFour = step3 + 20; //20
// Math.floor(Math.random() * 3) + 20; 