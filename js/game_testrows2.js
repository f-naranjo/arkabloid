const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    fps: 60,
    framesCounter: 0,
    playerKeys: {
      LEFT_KEY: 37,
      RIGHT_KEY: 39,
      SPACE: 32,
    },
    score: 0,
  
    init: function () {
      this.canvas = document.getElementById('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.width = window.innerWidth * 0.9;
      this.height = window.innerHeight * 0.9;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      
      this.start();
    },
  
    start: function () {
      this.reset()
  
      this.interval = setInterval(() => {
        this.framesCounter++;
  
        this.clear();
        this.drawAll();
        this.moveAll();
  
        this.isCollision()
        // if(this.framesCounter % 120 === 0) this.generateBricks()
        //   if(this.framesCounter % 100 === 0) this.score++;
        //   if(this.isCollision()) this.gameOver()
        if (this.framesCounter > 1000) this.framesCounter = 0;
      }, 1000 / this.fps)
    },
  
    reset: function () {
      this.background = new Background(this.ctx, this.width, this.height);
      this.player = new Player(this.ctx, 150, 20, this.width, this.height, this.playerKeys);
      this.ball = new Ball(this.ctx, 25, 25, this.width, this.height, this.player.posX, this.player.posY, this.player.width);
      // this.generateBricksMD()
    },
  
    clear: function () {
      this.ctx.clearRect(0, 0, this.width, this.height)
    },
  
    drawAll: function () {
      this.background.draw();
      this.player.draw();
      this.ball.draw();
      this.generateBricksMD()
      // this.bricks.forEach(brick => brick.draw())
      // this.bricks[0].forEach(brick => brick.draw())
      // ScoreBoard.draw(this.score)
  
      // for (i = 0; i < this.bricksRows; i++) {
      //   for (j = 0; j < this.numberOfBricks; j++) {
      //     console.log(this.bricks[i][j])
      //     this.bricks[i][j].draw()
      //     debugger
          
        // }
      // }''
  
  
      
    },
  
    moveAll: function () {
      // this.background.move()
      this.player.move()
      this.ball.move()
      // this.obstacles.forEach(obstacle => obstacle.move())
    },
  
    generateBricksMD: function () {
      this.numberOfBricks = 6;
      this.bricksRows = 4;
      this.brickWidth = this.width / (this.numberOfBricks + 1);
      this.brickGutter = this.brickWidth / (this.numberOfBricks - 1);
      this.brickHeight = 20;
      this.bricks = new Array(this.bricksRows).fill((new Array(this.numberOfBricks).fill("")))
  
      for (i = 0; i < this.bricksRows; i++) {
        
        for (j = 0; j < this.numberOfBricks; j++) {
          this.bricks[i][j] = new Brick(this.ctx, this.brickWidth * j + this.brickGutter * j, this.brickHeight*i + i*15 + 50, this.brickWidth, this.brickHeight, this.width, this.height)
          this.bricks[i][j].draw()
        }
      }
  
      // this.bricksAll = this.bricks.flat()
      // console.log(this.bricksAll)
      // this.bricksAll.forEach(brick => brick.draw())
      
  
      
    },
  
  
    gameOver: function () {
      clearInterval(this.interval)
    },
  
    isCollision: function () {
      //   //colisiones con player
        //left side
        if (this.ball.posY + this.ball.width > this.player.posY && this.ball.posX > this.player.posX && this.ball.posX + this.ball.width < this.player.posX + this.player.width) {
          this.ball.vy = -this.ball.vy*1.05
          this.ball.vx = +this.ball.vx*1.02
        }
  
       //colisiones con bricks
       // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
          // this.bricks.forEach((brick, idx)=>{
          //   if(brick.posX + brick.width > this.ball.posX && this.ball.posX + this.ball.width > brick.posX && brick.posY + brick.height > this.ball.posY && this.ball.posY + this.ball.height > brick.posY){
          //     this.bricks.splice(idx, 1)
          //     this.ball.vy = -this.ball.vy
          //   }
          // })
  
          //   this.bricks.flat().forEach((brick, idx)=>{
          //   if(brick.posX + brick.width > this.ball.posX && this.ball.posX + this.ball.width > brick.posX && brick.posY + brick.height > this.ball.posY && this.ball.posY + this.ball.height > brick.posY){
          //     console.log("se cumplio!")
          //     this.bricks.splice(idx, 1)
          //     this.ball.vy = -this.ball.vy
          //   }
          // })
  
          for (i = 0; i < this.bricksRows; i++) {
        
            for (j = 0; j < this.numberOfBricks; j++) {
              
              if(this.bricks[i][j].posX + this.bricks[i][j].width > this.ball.posX && this.ball.posX + this.ball.width > this.bricks[i][j].posX && this.bricks[i][j].posY + this.bricks[i][j].height > this.ball.posY && this.ball.posY + this.ball.height > this.bricks[i][j].posY){
                console.log(i,j)
                this.bricks[i].splice(0, 1)
                this.ball.vy = -this.ball.vy
              }
              
            }
          }
  
  
  
          
          
        // if(this.ball.posY + this.ball.height > this.height){
        //   alert("YOU LOSE!!")
        //   location.reload();
        //   this.gameOver()
        // }
  
    },
  
    clearObstacles: function () {
      // this.obstacles = this.obstacles.filter(obstacle => (obstacle.posX >= 0))
    }
  }