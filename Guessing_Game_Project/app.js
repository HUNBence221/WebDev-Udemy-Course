let maximum = parseInt(prompt("Welcome! Enter your max number: "));
while (!maximum) {
  maximum = parseInt(prompt("Please enter a valid number: "));
  // This will keep asking for a number until a valid one is entered
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt("Enter your first guess: (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === 'q') break;
  guess = parseInt(guess);
  if (guess > targetNum) {
    guess = (prompt("Too high! Try again: "));
    attempts++;
  } else if (guess < targetNum) {
    guess = (prompt("Too low! Try again: "));
    attempts++;
  } else {
    guess = (prompt("Invalid input! Please enter a number or 'q' to quit: "));
  }
}

if (guess === 'q') {
  console.log(`OK, YOU QUIT! After ${attempts} attempts.`);
} else {
  console.log(`Congratulations! You guessed it! It took you ${attempts} attempts.`);
}