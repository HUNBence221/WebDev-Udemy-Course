let input = prompt("What would you like to do?")
const commands = ["quit", "new", "list", "delete"]
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
    let index = parseInt(prompt("Enter the index of the task you want to remove!"));
    if (index === NaN) {
      prompt("Enter a real number!")
    } else {
      todos.splice(index, 1);
      console.log("Todo Removed!")
    }
  }


  input = prompt("What would you like to do?")
}
console.log("Okay, you quit the app.")