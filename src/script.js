"use strict";

// Variables
let tasks = [];
let taskId = 1;

// Data Types
const addTaskButton = document.getElementById('add-task');
const clearTasksButton = document.getElementById('clear-tasks');
const taskInput = document.getElementById('task-input');
const taskListElement = document.getElementById('tasks');

// Functions
function addTask(taskName) {
    if (!taskName) {
        alert("Task name cannot be empty.");
        return;
    }
    const task = {
        id: taskId++,
        name: taskName,
        completed: false
    };
    tasks.push(task);
    displayTasks();
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    displayTasks();
}

function toggleTaskCompletion(taskId) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.completed = !task.completed;
    }
    displayTasks();
}

// Display Tasks
function displayTasks() {
    taskListElement.innerHTML = "";
    if (tasks.length === 0) {
        taskListElement.innerHTML = "<li>No tasks available.</li>";
    } else {
        tasks.forEach(task => {
            const taskElement = document.createElement("li");
            taskElement.textContent = task.name;
            taskElement.style.textDecoration = task.completed ? "line-through" : "none";
            taskElement.addEventListener('click', () => toggleTaskCompletion(task.id));

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.style.marginLeft = "10px";
            deleteButton.addEventListener('click', (event) => {
                event.stopPropagation();
                deleteTask(task.id);
            });

            taskElement.appendChild(deleteButton);
            taskListElement.appendChild(taskElement);
        });
    }
}

// Event Listeners
addTaskButton.addEventListener('click', () => {
    const taskName = taskInput.value.trim();
    taskInput.value = ""; // Clear input field
    addTask(taskName);
});

clearTasksButton.addEventListener('click', () => {
    const confirmClear = confirm("Are you sure you want to clear all tasks?");
    if (confirmClear) {
        tasks = [];
        displayTasks();
    }
});

// Initial Task Display
displayTasks();

// Type Conversions and nullish coalescing
const userName = prompt("Enter your name:") ?? "Guest";
alert(`Hello, ${userName}! Welcome to the Task Manager.`);

// Loops and conditionals
for (let i = 0; i < 3; i++) {
    console.log(`Welcome message #${i + 1}`);
}
