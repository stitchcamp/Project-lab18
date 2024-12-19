// script.js

// Task #1: Click Event Properties
const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function(event) {
  console.log('Event type: ' + event.type);
  console.log('Target element: ' + event.target);
  console.log('Button text: ' + event.target.textContent);
});

// Task #2: Preventing Default Form Submission
const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submission prevented.');
});

// Task #3: Mouseover Event on Multiple Elements
const divElement = document.querySelector('div');
const paragraphElement = document.querySelector('p');
const imageElement = document.querySelector('img');

divElement.addEventListener('mouseover', function() {
  console.log('Mouse over the div element.');
});

paragraphElement.addEventListener('mouseover', function() {
  console.log('Mouse over the paragraph element.');
});

imageElement.addEventListener('mouseover', function() {
  console.log('Mouse over the image element.');
});

// Task #4: Mouseenter Event - Change Background Color
document.addEventListener('DOMContentLoaded', () => {
  const div = document.getElementById('hoverDiv');
  
  div.addEventListener('mouseenter', () => {
      div.style.backgroundColor = 'green';
  });
});

// Task #5: Click Event - Toggle Class
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('toggleButton');
  
  button.addEventListener('click', () => {
      button.classList.toggle('highlight');
  });
});
// Task #6: Focus Event - Highlight Input Field
const input1 = document.getElementById('myInput1');
const input2 = document.getElementById('myInput2');
const input3 = document.getElementById('myInput3');

input1.addEventListener('focus', function() {
  input1.style.borderColor = 'green';
});

input2.addEventListener('focus', function() {
  input2.style.borderColor = 'blue';
});

input3.addEventListener('focus', function() {
  input3.style.borderColor = 'red';
});