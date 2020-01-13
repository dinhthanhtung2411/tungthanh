let Ball = function (radius, x, y, speedx, speedy) {
    this.Radius = radius;
    this.X = x;   //canvas.width / 2;
    this.Y = y;   //canvas.height - 10;
    this.speedX = speedx;
    this.speedY = speedy;

    this.drawBall = function () {
        context.beginPath();
        context.arc(this.X, this.Y, this.Radius, 0, 2 * Math.PI);
        context.fillStyle = 'black';
        context.fill();
        context.closePath();
    }

    this.collision = function (brickk, paddlee) {
        for (let i = 0; i < brickk.ColumnCount; i++) {
            for (let j = 0; j < brickk.RowCount; j++) {
                let b = brickk.ListBrick[i][j];
                if (b.status == 1) {
                    if (this.X > b.x && this.X < b.x + brick.Width && this.Y > b.y && this.Y < b.y + brick.Height) {
                        this.speedY = -this.speedY;
                        b.status = 0;
                        score++;
                        if (score == brickk.RowCount * brickk.ColumnCount) {
                            let selection = confirm('You win !! Do you want to play again?');
                            clearInterval(run);
                            if (selection) {
                                document.location.reload();
                            }
                        }
                    }
                }
            }
        }
        if (this.X + this.speedX > canvas.width - this.Radius || this.X + this.speedX < this.Radius) {
            this.speedX = -this.speedX;
        }

        if (this.Y + this.speedY < this.Radius) {
            this.speedY = -this.speedY;
        } else if (this.Y + this.speedY > canvas.height - this.Radius) {
            if (this.X > paddlee.X && this.X < paddlee.X + paddlee.Width) {
                this.speedY = -this.speedY;
            } else {
                lives--;
                if (lives == 0) {
                    let selection = confirm('You loose !! Do you want to play again?');
                    clearInterval(run);
                    if (selection) {
                        document.location.reload();
                    }
                } else {
                    this.X = canvas.width / 2;
                    this.Y = canvas.height - 30;
                    paddlee.X = (canvas.width - paddlee.Width) / 2;
                }
            }
        }
    }
}
