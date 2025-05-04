// script.js
function addScheduleItem() {
  const scheduleList = document.getElementById('schedule-list');
  const newItem = document.createElement('div');

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Enter task or topic';

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.style.backgroundColor = '#dc143c';
  removeBtn.onclick = () => newItem.remove();

  newItem.appendChild(input);
  newItem.appendChild(removeBtn);
  scheduleList.appendChild(newItem);
}

// Motivation Popup
const motivationQuotes = [
  "Aftab, if you don’t study, your brain will go on vacation!",
  "Remember Aftab, studying is like a gym for your brain. Work it out!",
  "Procrastination: the art of keeping up with yesterday’s homework today, Aftab!",
  "Aftab, the struggle you’re feeling today is the strength you’re gaining tomorrow!",
  "Hey Aftab, let’s make today so productive that yesterday gets jealous!",
  "Aftab, don’t let your potential go to waste. You got this!"
];

function showMotivation() {
  const randomQuote = motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)];
  alert(randomQuote);
}

// Call motivation on page load
window.onload = function() {
  setInterval(showMotivation, 300000); // Every 5 minutes
};
