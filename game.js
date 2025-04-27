
// Basic setup for plane shooter
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth * 0.8;
canvas.height = 500;

// Simple plane object
let plane = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 60,
    width: 50,
    height: 50,
    color: 'cyan'
};

function drawPlane() {
    ctx.fillStyle = plane.color;
    ctx.fillRect(plane.x, plane.y, plane.width, plane.height);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlane();
    requestAnimationFrame(gameLoop);
}

gameLoop();
