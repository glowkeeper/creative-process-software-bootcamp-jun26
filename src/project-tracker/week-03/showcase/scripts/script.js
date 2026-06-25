// ==================================================
// Project Tracker – Week 3 JavaScript (Showcase)
// ==================================================
//
// This builds on the Guided Build (Complete) and adds:
//   - Task priorities (Low / Medium / High)
//   - Priority badges on task cards
//   - Priority-coloured card borders
//   - Filter buttons (All / High / Medium)
//   - Statistics showing tasks by priority
//   - Richer status feedback (success / error / info)
//


// --------------------------------------------------
// Part 1 – Connect JavaScript
// --------------------------------------------------

console.log("Project Tracker loaded (Showcase)");


// --------------------------------------------------
// Part 2 – Respond to User Actions
// --------------------------------------------------

const addButton = document.getElementById("add-task-button");

addButton.addEventListener("click", function () {
  handleAddTask();
});

// Filter button listeners
const filterAllButton = document.getElementById("filter-all");
const filterHighButton = document.getElementById("filter-high");
const filterMediumButton = document.getElementById("filter-medium");

filterAllButton.addEventListener("click", function () {
  showAllTasks();
  setActiveFilter(filterAllButton);
});

filterHighButton.addEventListener("click", function () {
  showTasksByPriority("high");
  setActiveFilter(filterHighButton);
});

filterMediumButton.addEventListener("click", function () {
  showTasksByPriority("medium");
  setActiveFilter(filterMediumButton);
});


// --------------------------------------------------
// Part 3 – Update Information
// --------------------------------------------------
// The type parameter controls the visual style of the message.
// Accepted values: "success", "error", "info"
// Omit type to use the default neutral style.

function showStatus(message, type) {
  const statusArea = document.getElementById("status-message");
  statusArea.textContent = message;

  // Reset any previous status style first
  statusArea.className = "status-message";

  // Apply the new status style if one was provided
  if (type) {
    statusArea.classList.add("status-" + type);
  }
}


// --------------------------------------------------
// Part 4 – Read User Input
// --------------------------------------------------

function getTaskName() {
  const input = document.getElementById("task-input");
  const taskName = input.value.trim();
  return taskName;
}

function getTaskPriority() {
  const prioritySelect = document.getElementById("priority-select");
  const priority = prioritySelect.value;
  return priority;
}


// --------------------------------------------------
// Part 5 – Create New Content
// --------------------------------------------------
// This version creates a card with a priority class and a visible badge.

function addTaskCard(taskName, priority) {
  const todoCards = document.getElementById("todo-cards");

  // Create the outer card element with a priority class
  const newCard = document.createElement("article");
  newCard.className = "card card--" + priority;

  // Store the priority as a data attribute for filtering and counting
  newCard.dataset.priority = priority;

  // Create the task title paragraph
  const newParagraph = document.createElement("p");
  newParagraph.textContent = taskName;

  // Create the priority badge
  const priorityBadge = document.createElement("span");
  priorityBadge.className = "priority-badge priority-badge--" + priority;

  // Capitalise the first letter for display: "high" → "High"
  const priorityLabel = priority.charAt(0).toUpperCase() + priority.slice(1);
  priorityBadge.textContent = priorityLabel;

  // Build the card structure
  newCard.appendChild(newParagraph);
  newCard.appendChild(priorityBadge);

  // Add the card to the To Do column
  todoCards.appendChild(newCard);
}


// --------------------------------------------------
// Part 6 – Display Useful Information
// --------------------------------------------------
// Showcase extension: counts total tasks AND tasks by priority.

function updateTaskCount() {
  const allCards = document.querySelectorAll(".card");
  const highCards = document.querySelectorAll(".card[data-priority='high']");
  const mediumCards = document.querySelectorAll(".card[data-priority='medium']");
  const lowCards = document.querySelectorAll(".card[data-priority='low']");

  const countDisplay = document.getElementById("task-count");
  countDisplay.innerHTML =
    "Total: " + allCards.length +
    " &nbsp;|&nbsp; High: " + highCards.length +
    " &nbsp;|&nbsp; Medium: " + mediumCards.length +
    " &nbsp;|&nbsp; Low: " + lowCards.length;
}

// Count tasks already on the page when it first loads
updateTaskCount();


// --------------------------------------------------
// Part 7 – Visible Feedback
// --------------------------------------------------

function handleAddTask() {
  const taskName = getTaskName();

  if (taskName === "") {
    showStatus("Please enter a task name before adding.", "error");
    document.getElementById("task-input").focus();
    return;
  }

  const priority = getTaskPriority();

  addTaskCard(taskName, priority);
  updateTaskCount();

  const priorityLabel = priority.charAt(0).toUpperCase() + priority.slice(1);
  showStatus("Task added: " + taskName + " (" + priorityLabel + " priority)", "success");

  const input = document.getElementById("task-input");
  input.value = "";
  input.focus();
}


// --------------------------------------------------
// Showcase Extension – Task Filtering
// --------------------------------------------------
// Shows all tasks or filters to show only a specific priority.

function showAllTasks() {
  const allCards = document.querySelectorAll(".card");

  allCards.forEach(function (card) {
    card.style.display = "";
  });

  showStatus("Showing all tasks.", "info");
}

function showTasksByPriority(priority) {
  const allCards = document.querySelectorAll(".card");

  allCards.forEach(function (card) {
    if (card.dataset.priority === priority) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });

  const priorityLabel = priority.charAt(0).toUpperCase() + priority.slice(1);
  showStatus("Showing " + priorityLabel + " priority tasks only.", "info");
}

// Highlights the active filter button and removes highlight from others
function setActiveFilter(activeButton) {
  const filterButtons = document.querySelectorAll(".filter-button");

  filterButtons.forEach(function (button) {
    button.classList.remove("filter-button--active");
  });

  activeButton.classList.add("filter-button--active");
}
