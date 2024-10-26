// tetris.js

const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");
const bgm = document.getElementById("bgm");
const startButton = document.getElementById("startButton");

const colors = [
    null,
    'cyan', // I
    'blue', // J
    'orange', // L
    'yellow', // O
    'green', // S
    'purple', // T
    'red' // Z
];

const tetrominoes = [
    [],
    [[1, 1, 1, 1]], // I
    [[2, 2, 2], [0, 0, 2]], // J
    [[3, 3, 3], [3, 0, 0]], // L
    [[4, 4], [4, 4]], // O
    [[0, 5, 5], [5, 5, 0]], // S
    [[6, 6, 6], [0, 6, 0]], // T
    [[7, 7, 0], [0, 7, 7]] // Z
];

const ROWS = 20;
const COLUMNS = 10;

let board = Array.from({ length: ROWS }, () => Array(COLUMNS).fill(0));
let currentTetromino;
let currentX = 0;
let currentY = 0;
let gameInterval;

function drawBoard() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLUMNS; col++) {
            if (board[row][col]) {
                context.fillStyle = colors[board[row][col]];
                context.fillRect(col * 30, row * 30, 30, 30);
                context.strokeStyle = 'black';
                context.strokeRect(col * 30, row * 30, 30, 30);
            }
        }
    }
}

function drawTetromino() {
    currentTetromino.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value) {
                context.fillStyle = colors[value];
                context.fillRect((currentX + x) * 30, (currentY + y) * 30, 30, 30);
                context.strokeStyle = 'black';
                context.strokeRect((currentX + x) * 30, (currentY + y) * 30, 30, 30);
            }
        });
    });
}

function collide() {
    for (let y = 0; y < currentTetromino.length; y++) {
        for (let x = 0; x < currentTetromino[y].length; x++) {
            if (currentTetromino[y][x] && (board[currentY + y] && board[currentY + y][currentX + x]) !== 0) {
                return true;
            }
        }
    }
    return false;
}

function merge() {
    currentTetromino.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value) {
                board[currentY + y][currentX + x] = value;
            }
        });
    });
}

function removeCompleteLines() {
    for (let row = ROWS - 1; row >= 0; row--) {
        if (board[row].every(value => value !== 0)) {
            board.splice(row, 1);
            board.unshift(Array(COLUMNS).fill(0));
        }
    }
}

function newTetromino() {
    const randomIndex = Math.floor(Math.random() * (tetrominoes.length - 1)) + 1;
    currentTetromino = tetrominoes[randomIndex];
    currentX = Math.floor(COLUMNS / 2) - Math.floor(currentTetromino[0].length / 2);
    currentY = 0;
    if (collide()) {
        clearInterval(gameInterval);
        alert("Game Over!");
        bgm.pause();
        document.location.reload(); // Restart the game
    }
}

function update() {
    currentY++;
    if (collide()) {
        currentY--;
        merge();
        removeCompleteLines();
        newTetromino();
    }
    drawBoard();
    drawTetromino();
}

startButton.addEventListener("click", () => {
    startButton.disabled = true; // Disable the button during the game
    bgm.play(); // Play background music
    newTetromino();
    gameInterval = setInterval(update, 1000); // Game update every second
});
