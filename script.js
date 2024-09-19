// Script goes here:

// Variables
const addButton = document.querySelector('#addToDoButton');
const addEnterKey = document.querySelector('.inputToDo')
const todoList = [];

//# Calling function to show the To-do list
showTodoList();

// Event Listener for clicking the add button
addButton.addEventListener("click", addTodo);

// Event Listener with if-statement for input when pressing 'Enter' instead of clicking the button
addEnterKey.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.querySelector('#addToDoButton').click();
    }
});

//# Function to show the To-do list when adding a task to the list with a for-loop
function showTodoList() {

    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<li>${todo}</li>`;
        todoListHTML += html; 
    }

    console.log(todoListHTML);

    document.querySelector('.toDoList').innerHTML = todoListHTML;
    }

/*  Function for adding a task to the To-do list with if-statement to not add empty text.
    Also a trim() to avoid whitespace abuse in input! */
function addTodo() {
    const inputElement = document.querySelector('.inputToDo');
    const userText = inputElement.value;
    let userTextTrim = userText.trim();

    if (userTextTrim === '') {
        alert('Need to type something!');
    }
    else {
        todoList.push(userTextTrim);
        console.log(todoList);

        inputElement.value = '';

        showTodoList();
    }
}