let count = 0;
while (count < 10) {
  count++;  
  console.log(count);
}

// for (let i = 1; i <= 10; i++)

const SECRET = "BabyHippo";

let guess = prompt("Guess the secret word: ");
while (guess !== SECRET) {
  guess = prompt("Wrong! Try again: ");
} 
console.log("You guessed it!");

let input = prompt("Hey, say something: ");
while (true) {
  input = prompt(input);
  if (input.toLowerCase() === "stop") {
    break;
  }
}
console.log("OK YOU WIN!");
// The loop will continue until the user types "stop".