//to resolve prompt reference error
const prompt = require("prompt-sync")();

//things we need:
/*
if user wants to add, edit, or delete a new task
if add -> ask what they want to add -> add to list which has a number assigned to it 
if edit -> ask for which number of task wanted to change -> prompt for new entry
if delete -> ask for which number of task -> remove from list
*/
let listLimit = 3;


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
        listLimit = listLimit - 1;
    } else if (userChoice === '3'){
        deleteTask();
        listLimit = listLimit - 1;

    }
}

function addTask(){
    console.log('you added a task');
}
function editTask(){
    console.log('you added a task');
}

function deleteTask(){
    console.log('you added a task');
}




//loop to ask if user wants to continue

while (listLimit > 0){
    taskAtHand();
    let userLoop = prompt('Continue? (y/n)');
    if (userLoop === 'y'){
        taskAtHand();
    } else if (userLoop === 'n'){
        console.log("nice");
        break;
    }
}











