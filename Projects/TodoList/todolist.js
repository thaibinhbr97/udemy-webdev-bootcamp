// What would you like to do?
// Command entered

// New
// Enter "a new todo"
// Console -> "a new todo" added to list

// List

// Console ->
// ***
// 0: todo 1
// 1: todo 2
// 2: todo 3
// ***

// Delete
// Enter index of todo to delete
// Console -> "todo" removed
// Update List

// Ask again if not exist in one of the commands

// Quit
// Console -> OK, YOU QUIT THE APP. Thanks for participating.

let commands = ['new', 'list', 'delete', 'quit'];
let list = [];
let input = prompt('What would you like to do?\n"new" - Add A Todo\n"list" - List All Todos\n"delete" - Remove Specific Todo\n"quit" - Quit App');
while (input !== 'quit') {
    if (input === 'new') {
        let todo = prompt('Enter a new todo');
        list.push(todo);
        console.log(`${todo} added to list`);
        input = prompt('What would you like to do?\n"new" - Add A Todo\n"list" - List All Todos\n"delete" - Remove Specific Todo\n"quit" - Quit App');
    } else if (input === 'list') {
        console.log('**********');
        for (let i = 0; i < list.length; ++i) {
            console.log(`${i}: ${list[i]}`);
        }
        console.log('**********');
        input = prompt('What would you like to do?\n"new" - Add A Todo\n"list" - List All Todos\n"delete" - Remove Specific Todo\n"quit" - Quit App');
    } else if (input === 'delete') {
        let index = parseInt(prompt('Enter index of todo to delete'));
        if (!Number.isNaN(index)) {
            let deleteItem = list.splice(index, 1);
            console.log(`${deleteItem} deleted from list`);
            input = prompt('What would you like to do?\n"new" - Add A Todo\n"list" - List All Todos\n"delete" - Remove Specific Todo\n"quit" - Quit App');
        } else {
            console.log('Oh no. Unknown Index.')
        }
    } else {
        input = prompt('Enter a valid command');
    }
}
console.log('OK, YOU QUIT THE APP. Thanks for participating.');