// paint.js

const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const clearButton = document.getElementById('clearButton');
const brushSizeSelect = document.getElementById('brushSize');
const solidBrushButton = document.getElementById('solidBrush');
const dottedBrushButton = document.getElementById('dottedBrush');
const currentToolText = document.getElementById('currentTool');
const debugButton = document.getElementById('debugButton');
const logContent = document.getElementById('logContent');

// Set canvas dimensions
canvas.width = window.innerWidth - 40; // Adjust as necessary
canvas.height = window.innerHeight - 100; // Adjust as necessary

let isDrawing = false;
let brushSize = 5; // Default brush size
let isDotted = false; // Default to solid brush

// Function to update the current tool text
function updateToolText() {
    const brushType = isDotted ? 'Dotted Brush' : 'Solid Brush'; // Determine brush type
    currentToolText.textContent = `Current Tool: ${brushType}, Size: ${brushSize}`; // Update text
}

// Function to log messages to the troubleshooting area
function logMessage(message) {
    const timestamp = new Date().toLocaleTimeString(); // Get current time
    logContent.innerHTML += `${timestamp}: ${message}\n`; // Append message with timestamp
}

// Start drawing
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.beginPath(); // Start a new path
    ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    logMessage("Started drawing"); // Log message
});

// Draw on canvas
canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.lineWidth = brushSize; // Set brush size
        ctx.strokeStyle = colorPicker.value; // Set stroke color to selected color

        if (isDotted) {
            ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
        } else {
            ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
            ctx.stroke(); // Draw the line
        }
    }
});

// Stop drawing
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.closePath(); // Close the path
    logMessage("Stopped drawing"); // Log message
});

// Clear the canvas
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    logMessage("Canvas cleared"); // Log message
});

// Update brush size
brushSizeSelect.addEventListener('change', (e) => {
    brushSize = e.target.value; // Update brush size based on selection
    updateToolText(); // Update tool text
    logMessage(`Brush size changed to ${brushSize}`); // Log message
});

// Brush style selection
solidBrushButton.addEventListener('click', () => {
    isDotted = false; // Set to solid brush
    solidBrushButton.style.backgroundColor = 'lightgray'; // Optional visual feedback
    dottedBrushButton.style.backgroundColor = ''; // Reset dotted button
    updateToolText(); // Update tool text
    logMessage("Switched to solid brush"); // Log message
});

dottedBrushButton.addEventListener('click', () => {
    isDotted = true; // Set to dotted brush
    dottedBrushButton.style.backgroundColor = 'lightgray'; // Optional visual feedback
    solidBrushButton.style.backgroundColor = ''; // Reset solid button
    updateToolText(); // Update tool text
    logMessage("Switched to dotted brush"); // Log message
});

// Initialize tool text
updateToolText(); // Set initial tool text

// Debug button functionality
debugButton.addEventListener('click', () => {
    logMessage('Debug Info:');
    logMessage(`Is Drawing: ${isDrawing}`);
    logMessage(`Brush Size: ${brushSize}`);
    logMessage(`Current Color: ${colorPicker.value}`);
    logMessage(`Brush Style: ${isDotted ? 'Dotted' : 'Solid'}`);
    logMessage(`Canvas Size: ${canvas.width} x ${canvas.height}`);
});
