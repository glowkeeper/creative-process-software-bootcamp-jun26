// ==================================================
// Project Tracker – Week 3 JavaScript
// ==================================================
//
// This script is structured to follow the Guided Build.
// Each part is clearly labelled with a comment block.
// The goal is clarity and readability for beginner learners.
//


// --------------------------------------------------
// Part 1 – Connect JavaScript
// --------------------------------------------------
// This message appears in the browser developer console.
// Open DevTools (F12) and click the Console tab to see it.

console.log("Project Tracker loaded");


// --------------------------------------------------
// Part 2 – Respond to User Actions
// --------------------------------------------------
// Find the button on the page and listen for a click.
// When the button is clicked, call the handleAddTask function.

const addButton = document.getElementById("add-task-button");

addButton.addEventListener("click", function () {
  handleAddTask();
});


// --------------------------------------------------
// Part 3 – Update Information
// --------------------------------------------------
// This function updates the status message on the page.
// It receives a message string and displays it to the user.

function showStatus(message) {
  const statusArea = document.getElementById("status-message");
  statusArea.textContent = message;
}


// --------------------------------------------------
// Part 4 – Read User Input
// --------------------------------------------------
// This function reads whatever the user has typed in the input field.
// It returns the text so other functions can use it.

function getTaskName() {
  const input = document.getElementById("task-input");
  const taskName = input.value;
  return taskName;
}


// --------------------------------------------------
// Part 5 – Create New Content
// --------------------------------------------------
// This function creates a new task card and adds it to the To Do column.
// It uses createElement to build the card and appendChild to add it.

function addTaskCard(taskName) {
  const todoCards = document.getElementById("todo-cards");

  // Create the outer card element
  const newCard = document.createElement("article");
  newCard.className = "card";

  // Create the paragraph inside the card
  const newParagraph = document.createElement("p");
  newParagraph.textContent = taskName;

  // Put the paragraph inside the card
  newCard.appendChild(newParagraph);

  // Put the card inside the To Do column
  todoCards.appendChild(newCard);
}


// --------------------------------------------------
// Part 6 – Display Useful Information
// --------------------------------------------------
// This function counts all task cards on the page and updates the counter.
// querySelectorAll returns every element matching the selector.

function updateTaskCount() {
  const allCards = document.querySelectorAll(".card");
  const total = allCards.length;

  const countDisplay = document.getElementById("task-count");
  countDisplay.textContent = "Total tasks: " + total;
}

// Count the tasks already on the page when it first loads
updateTaskCount();


// --------------------------------------------------
// Part 7 – Visible Feedback
// --------------------------------------------------
// This is the main function that runs when the button is clicked.
// It brings together all the other functions.
// Steps:
//   1. Read the task name from the input
//   2. Check the task name is not empty
//   3. Add the new task card
//   4. Update the task count
//   5. Show a status message
//   6. Clear the input field

function handleAddTask() {
  const taskName = getTaskName();

  if (taskName === "") {
    showStatus("No task entered. Please type a task name.");
    return;
  }

  addTaskCard(taskName);
  updateTaskCount();
  showStatus("Task added: " + taskName);

  const input = document.getElementById("task-input");
  input.value = "";
  input.focus();
}
