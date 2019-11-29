let Brick = function (columncount, rowcount, width, height, paddding, offsetTop, offsetLeft, x, y) {
    this.ColumnCount = columncount;
    this.RowCount = rowcount;
    this.Width = width;
    this.Height = height;
    this.Padding = paddding;
    this.OffsetTop = offsetTop;
    this.OffsetLeft = offsetLeft;
    this.X = x;
    this.Y = y;
    this.ListBrick = [];

    this.initListBrick = function() {
        for (let i = 0; i < this.ColumnCount; i++){
            this.ListBrick[i] = [];
            for (let j = 0; j < this.RowCount; j++){
                this.ListBrick[i][j] = {x:0,y:0,status:1};
            }
        }
    }

    this.drawBrick = function () {
        for (let i = 0; i < this.ColumnCount; i++){
            for (let j = 0; j < this.RowCount; j++){
                if (this.ListBrick[i][j].status == 1){
                    this.X = (j * (this.Width + this.Padding)) + this.OffsetLeft;
                    this.Y = (i * (this.Height + this.Padding)) + this.OffsetTop;
                    this.ListBrick[i][j].x = this.X;
                    this.ListBrick[i][j].y = this.Y;
                    context.beginPath();
                    context.rect(this.X,this.Y,this.Width,this.Height);
                    context.fillStyle = '#78b43d';
                    context.fill();
                    context.closePath();
                }
            }
        }
    }

}

