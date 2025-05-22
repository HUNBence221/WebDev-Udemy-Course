let input = prompt("What would you like to do?")
const todos = []
while (input.toLowerCase !== "quit" && input.toLowerCase !== "q") {
  if (input === "quit" || input === "q") {
    break;
  } else if (input === "new") {
    let newTodo = prompt("Enter a new todo!");
    console.log(`${newTodo} added to list`);
    todos.push(newTodo);
  } else if (input === "list") {
    console.log("*************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`)
    }
    console.log("*************");
  } else if (input === "delete") {
  const index = parseInt(prompt('Ok, enter an index to delete:'));
  //!Number.isNaN() if it's not NaN the code will go through, unless it ask you again
    if (!Number.isNaN(index)) {
        const deleted = todos.splice(index, 1);
        console.log(`Ok, deleted ${deleted[0]}`);
    } else {
        console.log('Unknown index')
    }
  }
  input = prompt("What would you like to do?")
}
console.log("Okay, you quit the app.")