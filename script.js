// script.js

// Motivational quotes list
const quotes = [
  "Aftab, you're doing better than you think!",
  "Push yourself, because no one else is going to do it for you.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "Anki today, Doctor tomorrow. Keep going, Aftab!",
  "Discipline is choosing between what you want now and what you want most.",
  "Study hard, Aftab – your future patients are counting on you!",
  "Stay consistent, not perfect.",
  "Motivation gets you started. Habit keeps you going.",
  "You are your only limit, Aftab!"
];

// Show a random motivational quote
function showQuote() {
  const quoteBox = document.getElementById("quoteBox");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteBox.textContent = quotes[randomIndex];
}

// Auto popup a quote every 5 minutes
setInterval(showQuote, 300000); // 5 minutes

// Add a task to the task list
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "✕";
  removeBtn.style.backgroundColor = "#e53935";
  removeBtn.style.border = "none";
  removeBtn.style.borderRadius = "5px";
  removeBtn.style.color = "white";
  removeBtn.style.marginLeft = "10px";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}
