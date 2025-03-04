To add the ability to fire a laser, you can follow these steps:

1. Define a laser object and a list to store active lasers.
2. Add functions to draw, update, and fire lasers.
3. Modify the `keyDown` function to fire a laser when the spacebar is pressed.

Here is the updated `game.js` file with these changes:

```javascript
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
const laserSpeed = 7;

function drawPlayer() {
    ctx.fillStyle = 'white';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawLaser(laser) {
    ctx.fillStyle = 'red';
    ctx.fillRect(laser.x, laser.y, laser.width, laser.height);
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
```

Add this updated `game.js` file to your repository and test the laser firing feature by pressing the spacebar.