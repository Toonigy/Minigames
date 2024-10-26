// paint.js

const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const clearButton = document.getElementById('clearButton');

// Set the canvas size
canvas.width = window.innerWidth - 40; // Responsive width
canvas.height = window.innerHeight - 100; // Responsive height

let isDrawing = false;

// Start drawing
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.beginPath(); // Start a new path
    ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
});

// Draw on canvas
canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
        ctx.strokeStyle = colorPicker.value; // Set stroke color to selected color
        ctx.lineWidth = 5; // Set line width
        ctx.stroke(); // Draw the line
    }
});

// Stop drawing
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.closePath(); // Close the path
});

// Clear the canvas
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
});
