let input = prompt("What would you like to do?");
const todos = ["coding task", "create post on twitter", "business plan"];

while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("**********");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("----------");
    } else if (input === "new") {
        const newTodo = prompt("What would you like to add?");
        todos.push(newTodo);
        console.log("Added:", newTodo);
        console.log("new list");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
    } else if (input === "delete") {
        const index = prompt("What would you like to delete?");
        todos.splice(index, 1);
        console.log("Deleted:", index);
    }
    else if (input === "update") {
        const index = prompt("What would you like to update?");
        const newTodo = prompt("What would you like to replace it with?");
        todos[index] = newTodo;
        console.log("Updated:", newTodo);
    }

    input = prompt("What would you like to do?"); // Move this line inside the loop
}
console.log("quit the app");