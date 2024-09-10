const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 600;

let ball = { x: 200, y: 500, radius: 15, speed: 5 };
let stones = [];
let score = 0;
let stoneSpeed = 3;
let gamePaused = false;
let gameInterval;
let stoneInterval;
let isPlaying = true;

// Create stones
function createStone() {
    const stone = {
        x: Math.random() * (canvas.width - 40),
        y: - 40,
        width: 40,
        height: 40,
    };
    stones.push(stone);
    
}

// Draw ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

// Draw stones
function drawStones() {
    stones.forEach(stone => {
        ctx.fillStyle = 'gray';
        ctx.fillRect(stone.x, stone.y, stone.width, stone.height);
    });
}

// Move stones
function moveStones() {
    stones.forEach(stone => {
        stone.y += stoneSpeed;
    });
}

// Detect collision
function detectCollision() {
    for (let i = 0; i < stones.length; i++) {
        const stone = stones[i];
        const distX = Math.abs(ball.x - stone.x - stone.width / 2);
        const distY = Math.abs(ball.y - stone.y - stone.height / 2);
        
        if (distX <= (stone.width / 2 + ball.radius) && distY <= (stone.height / 2 + ball.radius)) {
            resetGame();
            return;
        }
        
        if (stone.y > canvas.height) {
            score++;
            document.getElementById('score').innerText = score;
            stones.splice(i, 1);
            
            if (score % 10 === 0) {
                increaseDifficulty();
            }
        }
    }
}

// Increase speed and difficulty
function increaseDifficulty() {
    ball.speed += 1;
    stoneSpeed += 1;
    if (score % 10 === 0) {
        createStone(); // Add another stone for more challenge
    }
}

// Reset game on collision
function resetGame() {
    alert(`Game Over! Your score: ${score}`);
    ball = { x: 200, y: 500, radius: 15, speed: 5 };
    stones = [];
    score = 0;
    stoneSpeed = 3;
    document.getElementById('score').innerText = score;
}

// Update game state
function update() {
    if (!gamePaused) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        drawStones();
        moveStones();
        detectCollision();
    }
}

// Handle ball movement with arrow keys
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && ball.x + ball.radius < canvas.width) {
        ball.x += ball.speed;
    } else if (e.key === 'ArrowLeft' && ball.x - ball.radius > 0) {
        ball.x -= ball.speed;
    }
});

// Pause and play functionality
document.getElementById('pausePlayBtn').addEventListener('click', () => {
    if (isPlaying) {
        clearInterval(gameInterval);
        clearInterval(stoneInterval);
        document.getElementById('pausePlayBtn').innerText = 'Play';
    } else {
        gameInterval = setInterval(update, 1000 / 60);
        stoneInterval = setInterval(createStone, 2000);
        document.getElementById('pausePlayBtn').innerText = 'Pause';
    }
    isPlaying = !isPlaying;
});

// Start game loop
gameInterval = setInterval(update, 1000 / 60);
stoneInterval = setInterval(createStone, 2000);
