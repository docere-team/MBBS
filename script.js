const tasks = [
  { time: "9:00–10:15am", task: "Library – Revise old topics", done: false },
  { time: "10:30–12:00pm", task: "Ward Duty", done: false },
  { time: "12:00–1:00pm", task: "Class", done: false },
  { time: "1:00–2:00pm", task: "Lunch + Break", done: false },
  { time: "2:00–4:00pm", task: "Class", done: false },
  { time: "4:00–5:00pm", task: "Gym", done: false },
  { time: "5:30–8:30pm", task: "Library – Study + MCQs", done: false },
  { time: "9:30–10:30pm", task: "Flashcards / Light revision", done: false }
];

const subjects = [
  { name: "Pathology", done: false },
  { name: "Pharmacology", done: false },
  { name: "Microbiology", done: false }
];

const weeklyGoals = [];

const taskList = document.querySelector(".tasks");
const subjectList = document.querySelector(".subjects");
const goalList = document.querySelector(".goals");

const newGoalInput = document.querySelector("#newGoal");
const addGoalButton = document.querySelector("#addGoal");

function updateTasks() {
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

function updateSubjects() {
  subjectList.innerHTML = "";
  subjects.forEach((subject, index) => {
    const subjectItem = document.createElement("li");
    subjectItem.innerHTML = `
      <span>${subject.name}</span>
      <input type="checkbox" ${subject.done ? "checked" : ""} onchange="toggleSubject(${index})">
    `;
    subjectList.appendChild(subjectItem);
  });
}

function updateGoals() {
  goalList.innerHTML = "";
  weeklyGoals.forEach(goal => {
    const goalItem = document.createElement("li");
    goalItem.innerHTML = goal;
    goalList.appendChild(goalItem);
  });
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  updateTasks();
}

function toggleSubject(index) {
  subjects[index].done = !subjects[index].done;
  updateSubjects();
}

addGoalButton.addEventListener("click", () => {
  const newGoal = newGoalInput.value.trim();
  if (newGoal) {
    weeklyGoals.push(newGoal);
    newGoalInput.value = "";
    updateGoals();
  }
});

// Initial Update
updateTasks();
updateSubjects();
updateGoals();
