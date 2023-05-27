//to resolve prompt reference error
const prompt = require("prompt-sync")();

//things we need:
/*
if user wants to add, edit, or delete a new task
if add -> ask what they want to add -> add to list which has a number assigned to it 
if edit -> ask for which number of task wanted to change -> prompt for new entry
if delete -> ask for which number of task -> remove from list
*/
let listLimit = 0;
const listItems = [];

const totalList = {
    listItems,
}


//get user input for what to do
function taskAtHand(){
    let userChoice = prompt('');
    if (userChoice === '1'){
        addTask();
        listLimit = listLimit + 1;
    } else if (userChoice === '2'){
        editTask();
    } else if (userChoice === '3'){
        deleteTask();
        listLimit = listLimit - 1;
    }
}

function addTask(){
    let item = prompt("Task to add: ");
    listItems.push(item); //add the users input into array
    console.log(`----------------------`)
    displayListItems();
}

function editTask(){
    let item = prompt("Enter number of task to edit: "); //ask for which task to change
    item = parseInt(item); //turning string into int
    console.log(`----------------------`)
    let newTask = prompt(`${item}: `); 
    listItems[item - 1] = newTask; //setting input to change the selected task 
    console.log('you edited a task');
    console.log(`----------------------`)
    displayListItems();
}

function deleteTask(){
    let item = prompt("Enter number of task to delete: ");
    item = parseInt(item);
    console.log(`----------------------`)
    let confirmation = prompt(`Are you sure you want to delete '${listItems[item - 1]}' from your list? (y/n)`);
    confirmation = confirmation.toLowerCase();
    if (confirmation === 'y'){  
        console.log(`----------------------`)
        listItems.splice(item, 1);//deletes selected item from array splice(start -> users selected option, delete count -> 1)
        console.log(`you deleted '${listItems[item - 1]}' from your list.`);
        console.log(`----------------------`);
    }
    
}

//loop to ask if user wants to continue

while (listLimit < 20){
    console.log(totalList);
    menu();
    let userExit = prompt('Press any key to continue or Exit(e)'); //to see if user wants to exit
    if (userExit === 'e'){
        displayListItems();
        break;
    } else if (listItems > 3  || listItems % 2 !== 0){
        let userNewList = prompt(`Do you want to create a new list? (y/n)`);
        userNewList = userNewList.toLowerCase();
            if (userNewList === `y`){
                for (let i = 0; i < 3; i++){
                    totalList.list`${i}`;
                    console.log(totalList.listItems`${i}`);
                }
            } else {
                continue;
            }
    }
     else {
        displayListItems();
        continue;
    }
    
    
    
}

function displayListItems(){
    for (let i = 0; i < totalList.length; i++){
        console.log(`${i + 1}: ${listItems.list}`);
    }
}

function menu(){
    console.log(`What you you want do to your To Do list?`);
    console.log(`1. Add Task`);
    console.log(`2. Edit Task`);
    console.log(`3. Delete Task`);
    taskAtHand();
}