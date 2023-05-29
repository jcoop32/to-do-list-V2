//to resolve prompt reference error
const prompt = require("prompt-sync")();

//things we need:
/*
if user wants to add, edit, or delete a new task
if add -> ask what they want to add -> add to list which has a number assigned to it 
if edit -> ask for which number of task wanted to change -> prompt for new entry
if delete -> ask for which number of task -> remove from list
list tasks
exit program
complete a task


display a list of menu options
user will select an option
add- run addTask() -> return to menu
edit - run editTask() -> return to menu
delete - run deleteTask() -> return to menu
complete - run completeTask() - return to menu
exit - break loop
read the input and call function 
return to menu


completeTask() -> if isDone = false -> mark complete

*/

// const itemS = {
//     description: 'wash dishes',
//     isDone: false,
//     isDeleted: false,
// }

let exitProgram = false;

 const listItems = [
    {
    description: 'wash dishes',
    isDone: false,
    isDeleted: false, 
    }, 
    {
    description: 'sweep floor',
    isDone: false,
    isDeleted: false,
    }
];

//get user input for what to do
function menu(){
    let userChoice = prompt(`Command: (a)dd, (e)dit, (d)elete, (c)omplete, (l)ist, (L)ist All, e(x)it: `);
    if (userChoice === 'a'){
        addTask();
        displayListItems();
    } else if (userChoice === 'e'){
        editTask();
        displayListItems();
    } else if (userChoice === 'd'){
        deleteTask();
        displayListItems();
    } else if (userChoice === 'c'){
        completeTask();
    } else if (userChoice === 'l'){
        displayListItems();
    } else if (userChoice === 'L'){
        listAll();
    } else if (userChoice === 'x'){
        listAll();
        exitProgram = true;
    } else{
        console.log("command not found");
    }
}

function addTask(){
    let item = prompt("Task to add: ");
    const toDo = {
        description: item,
        isDone: false,
        isDeleted: false
    };
    listItems.push(toDo);
    // console.log('you added a task');
}

function editTask(){
    
    let item = prompt("Enter number of task to edit: ");
    item = parseInt(item);
    
    if (!listItems[item - 1].isDone){ 
        let newTask = prompt(`${item}: `);
        listItems[item - 1].description = newTask;   
    } else{ //if isDone = true -> task already completed
        console.log(`Task already completed.`)
    }
}

function deleteTask(){
    let item = prompt("Enter number of task to delete: ");
    item = parseInt(item);
    listItems.splice((item - 1), 1);
}

function completeTask(){
    let item = prompt("Enter number of task to complete: ");
    item = parseInt(item);
    listItems[item - 1].isDone = true;
    displayListItems();

}

//loop to ask if user wants to continue
while (!exitProgram){
    menu();
}

function displayListItems(){
    console.log(`\n\n----------------------`)
    console.log(`Todo List`)

    console.log(`----------------------`)
    for (let i = 0; i < listItems.length; i++){
        if(listItems[i].isDone || listItems[i].isDeleted){
            continue;
        }
        console.log(`${i + 1}: ${listItems[i].description}`);
        //console.log(`${i + 1}: ${listItems[i].description}  (${listItems[i].isDone})`);
    }
    console.log(`----------------------\n\n`)
}

function completedList(){
    console.log(`Completed Tasks`);
    console.log(`----------------------`);
    for (let i = 0; i < listItems.length; i++){
       if(listItems[i].isDone && !listItems[i].isDeleted){
        console.log(`${i + 1}: ${listItems[i].description}`);
        //console.log(`${i + 1}: ${listItems[i].description} (${listItems[i].isDone})`);
       }
    }
    console.log(`----------------------\n\n`)
}

function listAll(){
    displayListItems();
    completedList();
}
