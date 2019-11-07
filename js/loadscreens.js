class AllScreens{
  constructor(ctx, width, height, background) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.posX = 0;
    this.posY = 0;

    this.background = background;

    this.blue = 'rgba(47,88,170,1)'
    this.white50 = 'rgba(255,255,255,0.5)'
    this.white02 = 'rgba(255,255,255,0.1)'
    
    
  }

  draw(screen) {
    switch (screen){
        case "welcome":
            this.background.draw();
            this.ctx.font = "50px Arial";
            this.ctx.fillStyle = 'rgba(255,255,255,1)';
            this.ctx.fillText(`Welcome to arkablue :)`, this.width/2-150, this.height/2-50);
            this.ctx.font = "20px Arial";
            this.ctx.fillStyle = 'rgba(255,255,255,1)';
            this.ctx.fillText(`Press Enter to start`, this.width/2-100, this.height/2+50);
            
          break;
    
        case "gameOver":
          break;
    
        case "noLives":
          break;
      
        case "nextLevel":
                this.background.draw();
                this.ctx.font = "50px Arial";
                this.ctx.fillStyle = 'rgba(255,255,255,1)';
                this.ctx.fillText(`Well done! :)`, this.width/2-120, this.height/2-50);
                this.ctx.font = "20px Arial";
                this.ctx.fillStyle = 'rgba(255,255,255,1)';
                this.ctx.fillText(`Ready for the next level?`, this.width/2-100, this.height/2+50);
          break;
    
        case "youWin":
          break;
      }
  }

  
}