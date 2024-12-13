// Step 2: Initialize JavaScript
// Create a JavaScript file (script.js) and link it to your HTML using a <script> tag at the end of the body.
// Add "use strict"; at the top of your JavaScript file.
// Define the following variables:
// tasks (an empty array) to store task objects.
// taskId (set to 1) to keep track of unique task IDs.

// Step 3: Get DOM Elements
// Use document.getElementById to get references to:
// The "Add Task" button (addTaskButton).
// The "Clear Tasks" button (clearTasksButton).
// The task input field (taskInput).
// The task list container (taskListElement).

// Step 4: Create the Add Task Function
// Define a function addTask that:
// Takes a taskName parameter.
// Checks if taskName is empty and displays an alert if it is.
// Creates a task object with properties:
// id (incremented from taskId).
// name (set to taskName).
// completed (set to false).
// Adds the task to the tasks array.
// Calls displayTasks() to update the task list.

// Step 5: Create the Delete Task Function
// Define a function deleteTask that:
// Takes a taskId parameter.
// Removes the task with the matching id from the tasks array using filter.
// Calls displayTasks() to update the task list.

// Step 6: Create the Toggle Completion Function
// Define a function toggleTaskCompletion that:
// Takes a taskId parameter.
// Finds the task with the matching id in the tasks array.
// Toggles its completed property.
// Calls displayTasks() to update the task list.

// Step 7: Display the Task List
// Define a function displayTasks that:
// Clears the content of taskListElement.
// If the tasks array is empty, displays a message: "No tasks available."
// Otherwise:
// Loops through the tasks array.
// Creates a <li> element for each task, setting its text content and applying a "line-through" style if completed is true.
// Adds a "Delete" button to each task.
// Adds event listeners to handle task completion toggling and task deletion.

// Step 8: Add Event Listeners
// Attach an event listener to the "Add Task" button that:
// Gets the trimmed value from the input field.
// Clears the input field.
// Calls addTask with the task name.
// Attach an event listener to the "Clear Tasks" button that:
// Asks for confirmation using confirm.
// If confirmed, clears the tasks array and calls displayTasks().

// Step 9: Handle User Greeting
// Use prompt to ask the user for their name.
// Use nullish coalescing (??) to set the default name to "Guest" if no name is provided.
// Display a greeting using alert.
// Step 10: Add a Welcome Loop
// Use a for loop to log a welcome message three times in the console.