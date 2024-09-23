// Script goes here:

// Declared HTML variables
const inputTodo = document.querySelector('#inputTodo');
const addButton = document.querySelector('#addButton');
const alertText = document.querySelector('#alert');
const tasksLeft = document.querySelector('#tasksLeft');
const tasksDone = document.querySelector('#tasksDone');
const todoList = document.querySelector('#todoList');

// Declare variables
const todoArray = [];
let tasksCompleted = 0;
let taskCounter = 0;

// Function to update the task counter
function updateTaskCounter() {
    tasksLeft.innerText = `Tasks left: ${taskCounter}`;
}

// Function to update the task completed counter
function updateTasksCompleted() {
    tasksDone.innerText = `Tasks completed: ${tasksCompleted}`;
}

// EventListener for clicking the add button
addButton.addEventListener(
    "click",
    function () {

        // Get value from input and remove whitespaces
        let text = inputTodo.value.trim();

        // Condition: check input not empty
        if (text === '') {
            alertText.innerText = 'Need to type something!';
            return;
        }
        else {
            alertText.innerText = '';
        }

        // Add task to the Array
        todoArray.push(text);

        // Increase task count
        taskCounter++;

        updateTaskCounter();

        // Add new html elements in ul
        const listItem = document.createElement('li');
        todoList.appendChild(listItem);

        const itemLabel = document.createElement('span');
        itemLabel.innerText = text;
        listItem.appendChild(itemLabel);

        // Add delete button element in html with trash can icon
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.type = 'button';
        deleteButton.classList.add('deleteButton');
        listItem.appendChild(deleteButton);

        // Add eventlistener to the new span-element
        itemLabel.addEventListener(
            'click',
            function () {

                //Add and remove class for completed task
                itemLabel.classList.toggle('completed');

                // Update both counters: when task is clicked on/completed and updates if not completed again
                if (itemLabel.classList.contains('completed')) {
                    taskCounter--;
                    tasksCompleted++;
                }
                else {
                    taskCounter++;
                    tasksCompleted--;
                }

                updateTaskCounter();
                updateTasksCompleted();

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

            // Decrease task count only if the task was clicked on/completed
            if (!itemLabel.classList.contains('completed')) {
                taskCounter--;
            }

            // Update task counter
            updateTaskCounter();

        });

        // Resets input to placeholder after adding a task 
        inputTodo.value = '';

    }
);