const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const image = document.getElementById('bee');
const honey_bee = {
    w: 90,
    h: 90,
    x: 20,
    y: 200,
    speed: 5,
    dx: 0,
    dy: 0
};

function draw_image() {
    ctx.drawImage(image, honey_bee.x, honey_bee.y, honey_bee.w, honey_bee.h)
}
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function update_position() {
    honey_bee.x += honey_bee.dx;
    honey_bee.y += honey_bee.dy;
    detectWalls();

}

function detectWalls() {
    if (honey_bee.x < 0) {
        honey_bee.x = 0;
    }
    if (honey_bee.y < 0) {
        honey_bee.y = 0;
    }
    if (honey_bee.x + honey_bee.w > canvas.width) {
        honey_bee.x = canvas.width - honey_bee.w;
    }
    if (honey_bee.y + honey_bee.h > canvas.height) {
        honey_bee.y = canvas.height - honey_bee.h;
    }
}
function update() {
    clear();

    draw_image();

    update_position();

    requestAnimationFrame(update);
}
function moveUp() {
    honey_bee.dy = -honey_bee.speed;
}

function moveDown() {
    honey_bee.dy = honey_bee.speed;
}

function moveRight() {
    honey_bee.dx = honey_bee.speed;
}

function moveLeft() {
    honey_bee.dx = -honey_bee.speed;
}

function keyDown(e) {
    console.log(e.key);
    if (e.key === "ArrowRight" || e.key === "Right") {
        moveRight();
    } else if (e.key === "ArrowLeft" || e.key === "Left") {
        moveLeft();
    } else if (e.key === "ArrowUp" || e.key === "Up") {
        moveUp();
    } else if (e.key === "ArrowDown" || e.key === "Down") {
        moveDown();
    }
}

function keyUp(e) {
    if (
        e.key == "Right" ||
        e.key == "ArrowRight" ||
        e.key == "Left" ||
        e.key == "ArrowLeft" ||
        e.key == "Up" ||
        e.key == "ArrowUp" ||
        e.key == "Down" ||
        e.key == "ArrowDown"
    ) {
        honey_bee.dx = 0;
        honey_bee.dy = 0;
    }
}

update();

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
