//to resolve prompt reference error
const prompt = require("prompt-sync")();

//things we need:
/*
if user wants to add, edit, or delete a new task
if add -> ask what they want to add -> add to list which has a number assigned to it 
if edit -> ask for which number of task wanted to change -> prompt for new entry
if delete -> ask for which number of task -> remove from list
*/
let listLimit = 4;


const listItems = [];

//get user input for what to do
function taskAtHand(){
    console.log(`What you you want do to your To Do list?`);
    console.log(`1. Add Task`);
    console.log(`2. Edit Task`);
    console.log(`3. Delete Task`);
    let userChoice = prompt('');
    userChoice = userChoice.toLowerCase();
    if (userChoice === '1'){
        addTask();
        listLimit = listLimit - 1;
    } else if (userChoice === '2'){
        editTask();
    } else if (userChoice === '3'){
        deleteTask();
        listLimit = listLimit + 1;

    }
}

function addTask(){
    let item = prompt("Task to add: ");
    listItems.push(item);
    console.log(`----------------------`)
    displayListItems();
    if (listLimit > 1){
        console.log('you added a task');
    }
    console.log(`----------------------`)
}
function editTask(){
    let item = prompt("Enter number of task to edit: ");
    item = parseInt(item);
    
    console.log(`----------------------`)
    let newTask = prompt(`${item}: `);
    listItems[item - 1] = newTask;
   
    console.log('you edited a task');
    console.log(`----------------------`)
}

function deleteTask(){
    let item = prompt("Enter number of task to delete: ");
    item = parseInt(item);
    console.log(`----------------------`)
    listItems.splice(item, 1);
    console.log(`----------------------`)
    console.log(`you deleted '${listItems[item - 1]}' from your list.`);
    console.log(`----------------------`)
}

//loop to ask if user wants to continue

while (listLimit > 0){
    taskAtHand();
    let userLoop = prompt('Continue? (y/n)');
    if (userLoop === 'y'){
        console.log(`List: ${listItems}`);
        //taskAtHand();
    } else if (userLoop === 'n'){
        console.log(`To Do List:`);
        console.log(`------------------`)
        displayListItems();
        console.log(`\n------------------`)
        break;
    }
}

function displayListItems(){
    for (let i = 0; i < listItems.length; i++){
        console.log(`${i + 1}: ${listItems[i]}`);
    }
}









