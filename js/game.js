const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  fps: 60,
  framesCounter: 0,
  playerKeys: {
    LEFT_KEY:37,
    RIGHT_KEY:39,
    SPACE: 32,
  },
  score: 0,

  init: function() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.width = window.innerWidth/2;
    this.height = window.innerHeight*0.7;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.start();
  },

  start: function() {
    this.reset()
    this.interval = setInterval(() => {
      this.framesCounter++;

      this.clear();
      this.drawAll();
      this.moveAll();

     
    this.isCollision()
    //  console.log(this.isCollision())
      
    //   this.clearObstacles()
    //   if(this.framesCounter % 70 === 0) this.generateObstacles()
    //   if(this.framesCounter % 100 === 0) this.score++;
    //   if(this.isCollision()) this.gameOver()
    //   if(this.framesCounter > 1000) this.framesCounter = 0;
    }, 1000/this.fps)
  },

  reset: function() {
    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(this.ctx, 150, 20, this.width, this.height, this.playerKeys);
    this.ball = new Ball(this.ctx, 25,25, this.width, this.height, this.player.posX, this.player.posY, this.player.width);
    // this.obstacles = [];
    // ScoreBoard.init(this.ctx, this.score)
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  },

  drawAll: function() {
    this.background.draw();
    this.player.draw();
    this.ball.draw();
    // this.obstacles.forEach(obstacle => obstacle.draw())
    // ScoreBoard.draw(this.score)
  },

  moveAll: function() {
    // this.background.move()
    this.player.move()
    this.ball.move()
    // this.obstacles.forEach(obstacle => obstacle.move())
  },

  generateObstacles: function() {
    // this.obstacles.push(new Obstacle(this.ctx, 15, 45, this.width, this.height))
  },

  gameOver: function() {
    clearInterval(this.interval)
  },

  isCollision: function() {
    //colisiones con player
    if (this.ball.posY + this.ball.width > this.player.posY && this.ball.posX > this.player.posX){
      this.ball.vy = -this.ball.vy   
    }
    // colisiones genéricas
    // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
   // return this.obstacles.some(obs => (this.player.posX + this.player.width > obs.posX && obs.posX + obs.width > this.player.posX && this.player.posY + this.player.height > obs.posY && obs.posY + obs.height > this.player.posY ))
  },

  clearObstacles: function() {
    // this.obstacles = this.obstacles.filter(obstacle => (obstacle.posX >= 0))
  }
}