let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
let score = 0;
let lives = 2;
let ball = new Ball(10, canvas.width / 2, canvas.height - 10, 2, -2);
let paddle = new Paddle(75, 10, (canvas.width - 75)/2, canvas.height - 10, 30, false, false);
let brick = new Brick(6, 5, 70, 20, 10, 30, 50, 0, 0);

document.addEventListener('keydown',keyDownHandler);
document.addEventListener('keyup',keyUpHandler);

function keyDownHandler(evt) {
    switch (evt.which) {
        case 39:
            paddle.rightPressed = true;
            break;
        case 37:
            paddle.leftPressed = true;
    };
    paddle.move();
}

function keyUpHandler(evt) {
    switch (evt.which) {
        case 39:
            paddle.rightPressed = false;
            break;
        case 37:
            paddle.leftPressed = false;
    }
    paddle.move();
}

function drawScore() {
    context.font = '16px Arial';
    context.fillStyle = 'black';
    context.fillText('Score: ' + score,8,20);
}

function drawLives() {
    context.font = '16px Arial';
    context.fillStyle = 'black';
    context.fillText('Lives: ' + lives,canvas.width-65,20);
}

function draw() {
    context.clearRect(0,0,canvas.width,canvas.height);

    ball.drawBall();
    paddle.drawPaddle();
    brick.drawBrick();
    drawScore();
    drawLives();
    ball.collision(brick,paddle);
    ball.X += ball.speedX;
    ball.Y += ball.speedY;
}

brick.initListBrick();
let run = setInterval(draw,10);
