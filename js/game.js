const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  fps: 60,
  framesCounter: 0,
  livesCounter: 0,
  bricksCounter: 0,
  bricksLeft: 0,
  margin: undefined,
  margin2: undefined,
  playableWidth: undefined,
  palaybleHeight: undefined,
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
    if (this.width > 900) {
      this.width = 900;
    }
    this.height = window.innerHeight * 0.9;
    if (this.height > 900) {
      this.height = 900
    }
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.margin = 60;
    this.margin2 = this.margin / 2;
    this.playableWidth = this.width - this.margin
    this.playableHeight = this.height - this.margin
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
      this.checkStates()


      if (this.framesCounter % 400 === 0 && this.framesCounter % 500 !== 0 && this.framesCounter % 600 !== 0) {
        this.generateBarrels()
      }

      if (this.framesCounter > 1000) this.framesCounter = 0;
    }, 1000 / this.fps)
  },

  reset: function () {
    this.background = new Background(this.ctx, this.width, this.height, this.margin, this.margin2);
    this.player = new Player(this.ctx, 150, 20, this.playableWidth, this.playableHeight, this.playerKeys, this.margin);
    this.ball = new Ball(this.ctx, 20, 20, this.width, this.height, this.player.posX, this.player.posY - 50, this.player.width, this.margin);
    this.ballFollowerY = new PosRef(this.ctx);
    this.ballFollowerX = new PosRef(this.ctx);
    this.playerFollowerX = new PosRef(this.ctx);
    this.gameInfo = new Gameinfo(this.ctx, this.width, this.height)
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
    this.ballFollowerY.draw(this.margin2 + 2, this.ball.posY + this.ball.height / 2, this.margin2 + 16, this.ball.posY + this.ball.height / 2);
    this.ballFollowerX.draw(this.ball.posX + this.ball.width / 2, this.margin2 + 2, this.ball.posX + this.ball.width / 2, this.margin2 + 16);
    this.ballFollowerX.draw(this.player.posX + this.player.width / 2 - 8, this.margin2 + 10, this.player.posX + this.player.width / 2 + 8, this.margin2 + 10);
    this.bricks.forEach(e => e.draw());
    this.barrels.forEach(e => e.draw());
    this.boosters.forEach(e => e.draw());
    this.gameInfo.draw(this.framesCounter, this.livesCounter, this.bricksCounter, this.bricksLeft, this.ball.posX, this.ball.posY);
  },

  moveAll: function () {

    this.player.move()
    this.ball.move()
    this.barrels.forEach(e => e.move())
    this.boosters.forEach(e => e.move())
  },

  generateBricks: function () {
    //parametros básicos del nivel
    this.numberOfBricks = 8;
    this.bricksRows = 4;
    this.brickWidth = (this.playableWidth - (this.margin * 2)) / (this.numberOfBricks + 1.6);
    this.brickGutter = this.brickWidth / (this.numberOfBricks - 1);
    this.brickHeight = 20;
    this.bricks = []

    for (i = 0; i < this.bricksRows; i++) {
      for (j = 0; j < this.numberOfBricks; j++) {
        this.bricks.push(new Brick(this.ctx, (this.margin * 2) + this.brickWidth * j + this.brickGutter * j, this.brickHeight * i + i * 15 + 100, this.brickWidth, this.brickHeight))
      }
    }

  },

  generateBarrels: function () {
    this.barrels.push(new Barrel(this.ctx, 0, this.playableHeight - 62, 60, 60, this.playableWidth, this.playableHeight))
  },

  generateBooster: function (brickPosX, brickPosY, brickWidth, brickHeight) {
    this.boosters.push(new Booster(this.ctx, 30, 30, brickPosX, brickPosY, brickWidth, brickHeight))
  },


  gameOver: function () {
    clearInterval(this.interval)
  },

  isCollision: function () {

    //colisiones con player V3

    if (Math.min(this.ball.posX, this.ball.posX - this.ball.vx) + this.ball.width / 2 > Math.min(this.player.posX, this.player.posX - this.player.vx) &&
      Math.min(this.ball.posX, this.ball.posX - this.ball.vx) + this.ball.width / 2 <= Math.min(this.player.posX, this.player.posX - this.player.vx) + this.player.width / 4) {
      if (Math.min(this.ball.posY, this.ball.posY + this.ball.vy) + this.ball.height > this.player.posY) {
        this.ball.vy = -this.ball.vy
        if (this.ball.vx < 9.5) {
          if (this.ball.posX >= this.ball.posX - this.ball.vx) {
            this.ball.vx = this.ball.vx * 0.9} else {
            this.ball.vx = this.ball.vx * 1.06}
        }
        console.log(this.ball.vx)
        return false
      }
    }
      if (Math.min(this.ball.posX, this.ball.posX - this.ball.vx) > Math.min(this.player.posX, this.player.posX - this.player.vx) + this.player.width / 4 &&
        Math.min(this.ball.posX, this.ball.posX - this.ball.vx) + this.ball.width / 2 < Math.min(this.player.posX, this.player.posX - this.player.vx) + this.player.width / 2) {
        if (Math.min(this.ball.posY, this.ball.posY + this.ball.vy) + this.ball.height > this.player.posY) {
          this.ball.vy = -this.ball.vy
          if (this.ball.vx < 9.5) {
            if (this.ball.posX >= this.ball.posX - this.ball.vx) {
              this.ball.vx = this.ball.vx * 0.95
            } else {
              this.ball.vx = this.ball.vx * 1.03
            }

          }
          console.log(this.ball.vx)
          return false
        }
      }
    

        if (Math.min(this.ball.posX, this.ball.posX - this.ball.vx) > Math.min(this.player.posX, this.player.posX - this.player.vx) + this.player.width / 2 &&
          Math.min(this.ball.posX, this.ball.posX - this.ball.vx) + this.ball.width / 2 <= Math.min(this.player.posX, this.player.posX - this.player.vx) + this.player.width * 3 / 4) {
          if (Math.min(this.ball.posY, this.ball.posY + this.ball.vy) + this.ball.height > this.player.posY) {
            this.ball.vy = -this.ball.vy
            if (this.ball.vx < 9.5) {
              if (this.ball.posX >= this.ball.posX - this.ball.vx) {
                this.ball.vx = this.ball.vx * 1.02
              } else {
                this.ball.vx = this.ball.vx * 0.95
              }

            }
            console.log(this.ball.vx)
            return false
          }
        }

          if (Math.min(this.ball.posX, this.ball.posX - this.ball.vx) > Math.min(this.player.posX, this.player.posX - this.player.vx) + this.player.width * 3 / 4 &&
            Math.min(this.ball.posX, this.ball.posX - this.ball.vx) + this.ball.width / 2 < Math.min(this.player.posX, this.player.posX - this.player.vx) + this.player.width) {
            if (Math.min(this.ball.posY, this.ball.posY + this.ball.vy) + this.ball.height > this.player.posY) {
              this.ball.vy = -this.ball.vy
              if (this.ball.vx < 9.5) {
                if (this.ball.posX >= this.ball.posX - this.ball.vx) {
                  this.ball.vx = this.ball.vx * 1.06
                } else {
                  this.ball.vx = this.ball.vx * 0.9
                }

              }
              console.log(this.ball.vx)
              return false
            }
          }



            //colisiones con bricks

            this.bricks.forEach((brick, idx) => {
              if (brick.posX + brick.width > this.ball.posX &&
                this.ball.posX + this.ball.width > brick.posX &&
                brick.posY + brick.height > this.ball.posY &&
                this.ball.posY + this.ball.height > brick.posY) {
                brick.resistance--
                if (brick.hasBooster === 1) {
                  this.generateBooster(brick.posX, brick.posY, brick.width, brick.height);
                  brick.hasBooster = 0
                }
                if (brick.resistance === 0) {
                  this.ball.vy = -this.ball.vy
                  this.bricksCounter++
                  this.bricks.splice(idx, 1)
                  return true
                }
                this.ball.vy = -this.ball.vy
              }
            })


            //colisiones con barrels v2

            this.barrels.forEach((barrel, idx) => {
              // if player is below barrel
              //right side
              if (barrel.posY - 10 < this.player.posY) {
                if (this.player.posX < barrel.posX + barrel.width &&
                  this.player.posX + this.player.width > barrel.width + barrel.posX) {
                  this.player.posX = barrel.posX + barrel.width
                }
                //left side
                if (this.player.posX + this.player.width > barrel.posX && this.player.posX < barrel.posX) {
                  this.player.posX = this.player.posX - this.player.vx
                }

              }
              //if player is above barrel
              if (barrel.posY >= this.player.posY + this.player.height &&
                barrel.posY < this.player.posY + this.player.height * 2 &&
                barrel.posX < this.player.posX + this.player.width &&
                barrel.width + barrel.posX > this.player.posX) {
                this.player.isFloating = true
                this.player.posY = barrel.posY - this.player.height - 2
              } else this.player.isFloating = false

            })


            //colisiones con boosters

            this.boosters.forEach((booster, idx) => {
              if (booster.posX + booster.width > this.player.posX && this.player.posX + this.player.width > booster.posX && booster.posY + booster.height > this.player.posY && this.player.posY + this.player.height > booster.posY) {
                this.player.isHero = !this.player.isHero;
                setTimeout(() => {
                  this.player.isHero = false;
                  this.player.posY = this.playableHeight - 50
                  this.player.posY0 = this.playableHeight - 50
                }, 3000);

                this.boosters.splice(idx, 1)
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

          clearBoosters: function () {
            this.boosters.forEach((booster, idx) => {
              if (booster.posY > this.height) {
                this.boosters.splice(idx, 1)
              }
            })
          },

          checkStates: function() {
            this.player.checkState()
            this.bricksLeft = this.bricks.length
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