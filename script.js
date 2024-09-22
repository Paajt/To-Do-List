// Script goes here:

// Variables
const inputTodo = document.querySelector('#inputTodo');
const addButton = document.querySelector('#addButton');
const tasksLeft = document.querySelector('#tasksLeft');
const todoList = document.querySelector('#todoList');
const todoArray = [];
let taskCounter = 0;

// Function to update the task counter
function updateTaskCounter() {
    tasksLeft.innerText = `Tasks left: ${taskCounter}`;
}

// EventListener for clicking the add button
addButton.addEventListener(
    "click",
    function () {

        // Get value from input
        let text = inputTodo.value;

        // Condition: check input not empty
        if (text === '') {
            alert("Can't add empty task!");
            return;
        }

        // Add task to the Array
        todoArray.push(text);

        // Increase task counter
        taskCounter++;

        updateTaskCounter();

        // Add new html elements in ul
        const listItem = document.createElement('li');
        todoList.appendChild(listItem);

        const itemLabel = document.createElement('span');
        itemLabel.innerText = text;
        listItem.appendChild(itemLabel);

        // Add new delete button element in html 
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete task';
        deleteButton.type = 'button';
        listItem.appendChild(deleteButton);

        // Add eventlistener to the new span-element
        itemLabel.addEventListener(
            'click',
            function () {

                //Add and remove class for completed task
                itemLabel.classList.toggle('completed');

                // Update counter when task is clicked on/completed
                if (itemLabel.classList.contains('completed')) {
                    taskCounter--;
                }
                else {
                    taskCounter++;
                }

                updateTaskCounter();

            }
        );

        // Add EvenListener for delete button
        deleteButton.addEventListener('click', function () {

            // Remove task from todoArray
            const index = todoArray.indexOf(text);
            if (index > -1) {
                todoArray.splice(index, 1);
            }

            // Remove the list item from DOM
            todoList.removeChild(listItem);

            // Decrease task counter only if the task was not completed
            if (!itemLabel.classList.contains('completed')) {
                taskCounter--;
            }

            // Update task counter
            updateTaskCounter();

        });

        inputTodo.value = '';

    }
);