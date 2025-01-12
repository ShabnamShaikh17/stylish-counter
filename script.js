/* public/script.js */
const counter = document.getElementById('counter');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');

let count = 0;

function updateCounter() {
  counter.textContent = count;
}

increase.addEventListener('click', () => {
  if (count < 20) {
    count++;
    updateCounter();
  } else {
    alert('Counter cannot exceed 20!');
  }
});

decrease.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateCounter();
  } else {
    alert('Counter cannot go below 0!');
  }
});

updateCounter();
