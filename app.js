let task = prompt("What would you like to do?");

let toDoList = [];
while (task !== "quit") {
    if (task === "new") {
        let add = prompt("Enter a new ToDo:");
        toDoList.push(add);
    }
}
// console.log(toDoList);

while (task !== "quit") {
    if (task === "delete") {
        let remove = prompt("Input the index of the entry you would like to delete:");
        toDoList.pop(add);
    }
}
while (task !== "quit") {
    if (task === "list") {
        console.log(toDoList);
    }
}

if (task === "quit") {
    break;
}