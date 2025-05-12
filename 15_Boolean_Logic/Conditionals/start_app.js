
let rating = 3;

if (rating === 3) {
console.log("YOU ARE A SUPERSTAR!");
}

let random = Math.random()
if(random < 0.5) {
  console.log("Your number is less than 0.5!");
  console.log(random);
} else {
  console.log("Your number is more than 0.5!");
  console.log(random);
}

let rating2 = 2;

if (rating2 === 3) {
  console.log("YOU ARE A SUPERSTAR!");
} else if (rating2 === 2) {
  console.log("Meets Expectations!");
}

const dayOfWeek = prompt("Enter a day").toLowerCase();

if (dayOfWeek === 'monday') {
    console.log("UGHHH I HATE MONDAYS!")
} else if (dayOfWeek === 'saturday') {
    console.log("YAY I LOVE SATURDAYS!")
} else if (dayOfWeek === 'friday') {
    console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!")
} else {
    console.log("MEH")
}

// 0-5 - FREE
// 5 - 10 CHILD $10
// 10 - 65 ADULT $20
// 65+ SENIOR $10

const age = 75;

if (age < 5) {
  console.log("You are a baby. You get in for free!");
} else if (age < 10) {
  console.log("You are a child. You pay $10.");
} else if (age >= 10) {
  console.log("You are an adult. You pay $20.");
} else {
  console.log("You are a senior. You pay $10.");
}

// nesting conditionals

const password = prompt("Please enter a new password");

if (password.length >= 6) {
  if (password.indexOf(' ') === -1) {
  console.log("Password is valid!");
} else {
  console.log("Valid Password!");
}
} else {
  console.log("Password is invalid!");
}

