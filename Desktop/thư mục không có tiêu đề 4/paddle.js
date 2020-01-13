let Paddle = function (width, height, x, y, speed, rightpressed, leftpressed) {
    this.Width = width;
    this.Height = height;
    this.X = x;
    this.Y = y;
    this.speed = speed;
    this.rightPressed = rightpressed;
    this.leftPressed = leftpressed;

    this.getX = function() {
        return this.X;
    }

    this.drawPaddle = function () {
        context.beginPath();
        context.rect(this.X, this.Y, this.Width, this.Height);
        context.fillStyle = '#d35d82';
        context.fill();
        context.closePath();
    }

    this.move = function() {
        if (this.rightPressed && this.X < canvas.width - this.Width) {
            this.X += this.speed;
        } else if (this.leftPressed && this.X > 0) {
            this.X -= this.speed;
        }
    }

}

