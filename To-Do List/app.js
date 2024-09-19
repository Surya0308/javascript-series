const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskTest = taskInput.value //get the input value
    if(taskTest === '') return;  //Do nothing if input is empty

    //Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskTest; //set the text of the list item

    //create a Delete buttom
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(listItem); //remove the list item when button is clicked 
    }

    listItem.appendChild(deleteButton); //Append the button to the list item
    taskList.appendChild(listItem); //Append the lsit item to the Task list

    //Clear the input
    taskInput.value = '';

    console.log(taskTest)
}

// Add event listener to the button
addTaskButton.addEventListener('click', addTask);