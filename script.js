// Dummy Data
let tasks = [
  { time: "9:00–10:15am", task: "Library – Revise old topics", done: false },
  { time: "10:30–12:00pm", task: "Ward Duty", done: false },
  { time: "12:00–1:00pm", task: "Class", done: false },
  { time: "1:00–2:00pm", task: "Lunch + Break", done: false },
  { time: "2:00–4:00pm", task: "Class", done: false },
  { time: "4:00–5:00pm", task: "Gym", done: false },
  { time: "5:30–8:30pm", task: "Library – Study + MCQs", done: false },
  { time: "9:30–10:30pm", task: "Flashcards / Light revision", done: false }
];

let subjects = [
  { name: "Pathology", topics: [], done: false },
  { name: "Pharmacology", topics: [], done: false },
  { name: "Microbiology", topics: [], done: false }
];

let weeklyGoals = [];

// DOM Elements
const taskList = document.querySelector(".tasks-list");
const subjectList = document.querySelector(".subject-list");
const goalList = document.querySelector(".goals");
const newSubjectInput = document.querySelector("#newSubject");
const addSubjectBtn = document.querySelector("#addSubject");
const newGoalInput = document.querySelector("#newGoal");
const addGoalBtn = document.querySelector("#addGoal");

// Update Task List
function updateTaskList() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.classList.toggle("checked", task.done);
    taskItem.innerHTML = `
      <span>${task.time} - ${task.task}</span>
      <input type="checkbox" ${task.done ? "checked" : ""} onchange="toggleTask(${index})">
    `;
    taskList.appendChild(taskItem);
  });
}

// Update Subjects
function updateSubjects() {
  subjectList.innerHTML = "";
  subjects.forEach((subject, index) => {
    const subjectItem = document.createElement("li");
    subjectItem.innerHTML = `
      <span>${subject.name}</span>
      <button onclick="addTopic(${index})">Add Topic</button>
      <input type="text" placeholder="Topic Name" id="topicInput${index}" style="display:none;">
      <ul>
        ${subject.topics.map(topic => `<li>${topic}</li>`).join("")}
      </ul>
    `;
    subjectList.appendChild(subjectItem);
  });
}

// Add New Subject
function addSubject() {
  const newSubject = newSubjectInput.value.trim();
  if (newSubject) {
    subjects.push({ name: newSubject, topics: [], done: false });
    newSubjectInput.value = "";
    updateSubjects();
  }
}

// Toggle Task
function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  updateTaskList();
}

// Add Topic to Subject
function addTopic(index) {
  const topicInput = document.querySelector(`#topicInput${index}`);
  topicInput.style.display = "inline";
  topicInput.focus();
  topicInput.addEventListener("blur", function() {
    const topic = topicInput.value.trim();
    if (topic) {
      subjects[index].topics.push(topic);
      updateSubjects();
    }
  });
}

// Add Weekly Goal
function addGoal() {
  const newGoal = newGoalInput.value.trim();
  if (newGoal) {
    weeklyGoals.push(newGoal);
    newGoalInput.value = "";
    updateGoals();
  }
}

// Update Weekly Goals
function updateGoals() {
  goalList.innerHTML = "";
  weeklyGoals.forEach(goal => {
    const goalItem = document.createElement("li");
    goalItem.innerHTML = goal;
    goalList.appendChild(goalItem);
  });
}

// Initial Calls
updateTaskList();
updateSubjects();
updateGoals();

// Event Listeners
addSubjectBtn.addEventListener("click", addSubject);
addGoalBtn.addEventListener("click", addGoal);
