const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const player = {
    width: 50,
    height: 20,
    x: canvas.width / 2 - 25,
    y: canvas.height - 30,
    speed: 5,
    dx: 0
};

const lasers = [];
const invaders = [];
const laserSpeed = 7;
const invaderSpeed = 2;
const invaderRows = 3;
const invaderCols = 10;
const invaderWidth = 40;
const invaderHeight = 20;
const invaderPadding = 10;
const invaderOffsetTop = 30;
const invaderOffsetLeft = 30;

// Initialize invaders
for (let r = 0; r < invaderRows; r++) {
    for (let c = 0; c < invaderCols; c++) {
        const invader = {
            x: invaderOffsetLeft + c * (invaderWidth + invaderPadding),
            y: invaderOffsetTop + r * (invaderHeight + invaderPadding),
            width: invaderWidth,
            height: invaderHeight,
            exploded: false
        };
        invaders.push(invader);
    }
}

function drawPlayer() {
    ctx.fillStyle = 'white';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawLaser(laser) {
    ctx.fillStyle = 'red';
    ctx.fillRect(laser.x, laser.y, laser.width, laser.height);
}

function drawInvader(invader) {
    if (!invader.exploded) {
        ctx.fillStyle = 'green';
        ctx.fillRect(invader.x, invader.y, invader.width, invader.height);
    }
}

function fireLaser() {
    const laser = {
        x: player.x + player.width / 2 - 2.5,
        y: player.y,
        width: 5,
        height: 20,
        dy: -laserSpeed
    };
    lasers.push(laser);
}

function updateLasers() {
    for (let i = lasers.length - 1; i >= 0; i--) {
        const laser = lasers[i];
        laser.y += laser.dy;
        if (laser.y < 0) {
            lasers.splice(i, 1);
        } else {
            for (let j = invaders.length - 1; j >= 0; j--) {
                const invader = invaders[j];
                if (!invader.exploded && laser.x < invader.x + invader.width &&
                    laser.x + laser.width > invader.x &&
                    laser.y < invader.y + invader.height &&
                    laser.y + laser.height > invader.y) {
                    invader.exploded = true;
                    lasers.splice(i, 1);
                    break;
                }
            }
        }
    }
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
    clear();
    drawPlayer();
    player.x += player.dx;

    if (player.x < 0) {
        player.x = 0;
    }
    if (player.x + player.width > canvas.width) {
        player.x = canvas.width - player.width;
    }

    updateLasers();
    lasers.forEach(drawLaser);
    invaders.forEach(drawInvader);

    requestAnimationFrame(update);
}

function moveRight() {
    player.dx = player.speed;
}

function moveLeft() {
    player.dx = -player.speed;
}

function keyDown(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
        moveRight();
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        moveLeft();
    } else if (e.key === ' ' || e.key === 'Spacebar') {
        fireLaser();
    }
}

function keyUp(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight' ||
        e.key === 'Left' || e.key === 'ArrowLeft') {
        player.dx = 0;
    }
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

update();
