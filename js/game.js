const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  fps: 60,
  framesCounter: 0,
  playerKeys: {
    LEFT_KEY: 37,
    ARROW_UP: 38,
    RIGHT_KEY: 39,
    SPACE: 32,
  },
  score: 0,

  init: function () {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.width = window.innerWidth * 0.9;
    if(this.width > 1200){
      this.width = 800;
    }
    this.height = window.innerHeight * 0.9;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.startStop();

  },

  start: function () {
    this.reset()

    this.interval = setInterval(() => {
      this.framesCounter++;

      this.clear();
      this.drawAll();
      this.moveAll();

      this.isCollision()
      this.clearBarrels()
      this.clearBoosters()
      this.checks()

      // if (this.framesCounter % 1200 === 0) {
      //   this.generateBarrels()
      // }
      if (this.framesCounter%400 === 0 && this.framesCounter%500 !== 0 && this.framesCounter%600 !== 0) {
        this.generateBarrels()
      }
      //   if(this.framesCounter % 100 === 0) this.score++;
      //   if(this.isCollision()) this.gameOver()
      if (this.framesCounter > 1000) this.framesCounter = 0;
    }, 1000/this.fps)
  },

  reset: function () {
    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(this.ctx, 150, 20, this.width, this.height, this.playerKeys);
    this.ball = new Ball(this.ctx, 20, 20, this.width, this.height, this.player.posX, this.player.posY-50, this.player.width);
    this.barrels = []
    this.boosters = []
    this.generateBricks()

  },

  clear: function () {
    this.ctx.clearRect(0, 0, this.width, this.height)
  },

  drawAll: function () {
    this.background.draw();
    this.player.draw();
    this.ball.draw();
    this.bricks.forEach(e => e.draw());
    this.barrels.forEach(e => e.draw());
    this.boosters.forEach(e => e.draw())
  },

  moveAll: function () {
    // this.background.move()
    this.player.move()
    this.ball.move()
    this.barrels.forEach(e => e.move())
    this.boosters.forEach(e => e.move())
  },

  generateBricks: function () {
    //parametros básicos del nivel
    this.numberOfBricks = 10;
    this.bricksRows = 2;
    this.brickWidth = this.width / (this.numberOfBricks + 1);
    this.brickGutter = this.brickWidth / (this.numberOfBricks - 1);
    this.brickHeight = 30;
    this.bricks = []

    for (i = 0; i < this.bricksRows; i++) {
      for (j = 0; j < this.numberOfBricks; j++) {
        this.bricks.push(new Brick(this.ctx, this.brickWidth * j + this.brickGutter * j, this.brickHeight * i + i * 15 + 50, this.brickWidth, this.brickHeight, this.width, this.height))
      }
    }

  },

  generateBarrels: function () {
    this.barrels.push(new Barrel(this.ctx, 0, this.height - 60, 60, 60, this.width, this.height))
  },

  generateBooster:function (brickPosX, brickPosY, brickWidth, brickHeight){
    this.boosters.push(new Booster(this.ctx, 20, 20,brickPosX, brickPosY, brickWidth,brickHeight))
  },


  gameOver: function () {
    clearInterval(this.interval)
  },

  isCollision: function () {
    // colisiones con player
    // if (this.ball.posY + this.ball.height> this.player.posY && this.ball.posX + this.ball.width/2 > this.player.posX && this.ball.posX - this.ball.width/2 + this.ball.width < this.player.posX + this.player.width) {
    //   this.ball.vy = -this.ball.vy * 1.02
    //   this.ball.vx = +this.ball.vx * 1.01
    // }

    //colisiones con player V2
    
    // if (this.ball.posX + this.ball.width > this.player.posX &&
    //   this.ball.posX + this.ball.width <= this.player.posX + this.player.width / 4) {
    //     if(this.ball.posY + this.ball.height > this.player.posY){
    //       console.log(1)
    //       this.ball.vy = -this.ball.vy 
    //       this.ball.vx = this.ball.vx * 1.05
    //       return false
    //     }
     
    // }

    // if (this.ball.posX > this.player.posX + this.player.width / 4 &&
    //   this.ball.posX + this.ball.width < this.player.posX + this.player.width / 2) {
    //     if(this.ball.posY + this.ball.height > this.player.posY){
    //   this.ball.vy = -this.ball.vy 
    //   this.ball.vx = this.ball.vx * 1.02
    //   console.log(2)
    //   return false
    //     }
    // }

    // if (this.ball.posX > this.player.posX + this.player.width / 2 &&
    //   this.ball.posX + this.ball.width <= this.player.posX + this.player.width * 3 / 4) {
    //     if(this.ball.posY + this.ball.height > this.player.posY){
    //   this.ball.vy = -this.ball.vy 
    //   this.ball.vx = this.ball.vx * 1.02
    //   console.log(3)
    //     }
    //   return false
    // }

    // if (this.ball.posX > this.player.posX + this.player.width * 3 / 4 &&
    //   this.ball.posX + this.ball.width < this.player.posX + this.player.width) {
    //     if(this.ball.posY + this.ball.height > this.player.posY){
    //   this.ball.vy = -this.ball.vy 
    //   this.ball.vx = this.ball.vx * 1.05
    //   console.log(4)
    //     }
    //   return false
    // }
  
       //colisiones con player V3
    
    if (this.ball.posX + this.ball.width/2 > this.player.posX &&
      this.ball.posX + this.ball.width/2 <= this.player.posX + this.player.width / 4) {
        if(this.ball.posY + this.ball.height > this.player.posY){
          console.log(1)
          this.ball.vy = -this.ball.vy 
          this.ball.vx = this.ball.vx * 1.05
          return false
        }
     
    }

    if (this.ball.posX > this.player.posX + this.player.width / 4 &&
      this.ball.posX + this.ball.width/2 < this.player.posX + this.player.width / 2) {
        if(this.ball.posY + this.ball.height > this.player.posY){
      this.ball.vy = -this.ball.vy 
      this.ball.vx = this.ball.vx * 1.02
      console.log(2)
      return false
        }
    }

    if (this.ball.posX > this.player.posX + this.player.width / 2 &&
      this.ball.posX + this.ball.width/2 <= this.player.posX + this.player.width * 3 / 4) {
        if(this.ball.posY + this.ball.height > this.player.posY){
      this.ball.vy = -this.ball.vy 
      this.ball.vx = this.ball.vx * 1.02
      console.log(3)
        }
      return false
    }

    if (this.ball.posX > this.player.posX + this.player.width * 3 / 4 &&
      this.ball.posX + this.ball.width/2 < this.player.posX + this.player.width) {
        if(this.ball.posY + this.ball.height > this.player.posY){
      this.ball.vy = -this.ball.vy 
      this.ball.vx = this.ball.vx * 1.05
      console.log(4)
        }
      return false
    }
  
    
    //colisiones con bricks
    // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
    this.bricks.forEach((brick, idx) => {
      if (brick.posX + brick.width > this.ball.posX && 
        this.ball.posX + this.ball.width > brick.posX && 
        brick.posY + brick.height > this.ball.posY && 
        this.ball.posY + this.ball.height > brick.posY) {
        brick.resistance--
        if(brick.hasBooster === 1){
          this.generateBooster(brick.posX, brick.posY, brick.width, brick.height);
          brick.hasBooster = 0
        }
        if(brick.resistance === 0){   
          this.ball.vy = -this.ball.vy
          this.bricks.splice(idx, 1)
          return true
        }
        this.ball.vy = -this.ball.vy
      }
    })


    //colisiones con barrels
    // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
    // this.barrels.forEach((brick, idx) => {
    //   if (brick.posX + brick.width > this.player.posX && this.player.posX + this.player.width > brick.posX && brick.posY + brick.height > this.player.posY && this.player.posY + this.player.height > brick.posY) {
    //     alert("YOU LOSE!!")
    //     location.reload();
    //     this.gameOver()
    //   }
    // })

    //colisiones con barrels v2

    this.barrels.forEach((barrel, idx)=> {
      // if player is below barrel
          //right side
      if(barrel.posY < this.player.posY){
        if(this.player.posX < barrel.posX+barrel.width && 
          this.player.posX+this.player.width > barrel.width+barrel.posX){ 
            this.player.posX = barrel.posX + barrel.width
          }
          //left side
        if(this.player.posX+this.player.width>barrel.posX && this.player.posX<barrel.posX){
          this.player.posX = this.player.posX-this.player.vx}
         
      }
      //if player is above barrel
         if (barrel.posY >= this.player.posY + this.player.height &&
          barrel.posY < this.player.posY + this.player.height * 2 &&
          barrel.posX < this.player.posX + this.player.width &&
          barrel.width + barrel.posX > this.player.posX){
            this.player.isFloating = true
            this.player.posY = barrel.posY - this.player.height
          }else this.player.isFloating = false 
          
    })


    //colisiones con boosters
    // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
    this.boosters.forEach((booster, idx) => {
      if (booster.posX + booster.width > this.player.posX && this.player.posX + this.player.width > booster.posX && booster.posY + booster.height > this.player.posY && this.player.posY + this.player.height > booster.posY) {
        this.player.isHero = !this.player.isHero;
        setTimeout(()=>{
            this.player.isHero = false;
            this.player.posY = this.height - 50
            this.player.posY0 = this.height - 50
        }, 3000);
 
        this.boosters.splice(idx,1)
      }
    })

   // Game WIN Game LOOSE
    if (this.ball.posY + this.ball.height > this.height) {
      // alert("YOU LOSE!!")
      // location.reload();
      // this.gameOver()
    }

    if (this.bricks.length === 0) {
      // alert("YOU WIN!!")
      // location.reload();
      // this.gameOver()
    }

  },

  clearBarrels: function () {
    this.barrels.forEach((barrel, idx) => {
      if (barrel.posX > this.width) {
        this.barrels.splice(idx, 1)
      }
    })
  },

  clearBoosters: function (){
    this.boosters.forEach((booster, idx) =>{
      if(booster.posY > this.height){
        this.boosters.splice(idx,1)
      }
    })
  },

  checks: function(){
    this.player.checkState()
  },

  startStop: function () {
    this.switch = false;
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === this.playerKeys.SPACE) {
        if (this.switch === true) {
          this.switch = !this.switch
          this.gameOver()
        } else {
          this.switch = !this.switch
          this.start()
        }
      }
    })

  }


}