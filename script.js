// script.js

// Get the counter element
const counterElement = document.getElementById('counter');

// Initialize the counter
let counter = 0;

// Function to update the counter
function updateCounter() {
  counter++;
  counterElement.textContent = counter;
}

// Listen for key presses
document.addEventListener('keydown', updateCounter);

// Listen for mouse clicks
document.addEventListener('click', updateCounter);
 
document.addEventListener('DOMContentLoaded', () => {
  const counterElement = document.getElementById('counter');
  let counter = 0;

  function updateCounter() {
    counter++;
    counterElement.textContent = counter;
  }

  document.addEventListener('keydown', updateCounter);
  document.addEventListener('click', updateCounter);
});

document.addEventListener('DOMContentLoaded', () => {
  // Get the counter element
  const counterElement = document.getElementById('counter');

  // Initialize the counter
  let counter = 0;

  // Function to update the counter
  function updateCounter() {
    counter++;
    counterElement.textContent = counter;
  }

  // Listen for key presses
  document.addEventListener('keydown', updateCounter);

  // Listen for mouse clicks
  document.addEventListener('click', updateCounter);

  // Listen for touch events (for mobile devices)
  document.addEventListener('touchstart', updateCounter);
});
