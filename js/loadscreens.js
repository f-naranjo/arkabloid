class AllScreens {
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

    this.fontBig = "30px courier_new" 
    this.fontMed = "15px courier_new"


  }

  draw(screen) {
    switch (screen) {
      case "welcome":
        this.background.draw();
        this.ctx.textAlign = "center";
        this.ctx.font = this.fontBig;
        this.ctx.fillStyle = 'rgba(255,255,255,1)';
        this.ctx.fillText(`Welcome to arkabloid :)`, this.width / 2, this.height / 2 - 50);
        this.ctx.textAlign = "center";
        this.ctx.font = this.fontMed;
        this.ctx.fillStyle = 'rgba(255,255,255,1)';
        this.ctx.fillText("Press ⬅ to move left, ➡ to move right and ⬆ to jump", this.width / 2, this.height / 2 + 50);
        this.ctx.font = this.fontMed;
        this.ctx.fillStyle = 'rgba(255,255,255,1)';
        this.ctx.fillText(`Ready? Press spacebar to start`, this.width / 2, this.height / 2 + 100);

        break;

      case "gameOver":
        this.background.draw();
        this.ctx.font = this.fontBig;
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = 'rgba(255,255,255,1)';
        this.ctx.fillText(`Ouch! You are out of lives :(`, this.width / 2 , this.height / 2 - 50);
        this.ctx.textAlign = "center";
        this.ctx.font = this.fontMed;
        this.ctx.fillStyle = 'rgba(255,255,255,1)';
        this.ctx.fillText(`Press Enter to Start Again`, this.width / 2 , this.height / 2 + 50);
        break;

      case "nextLevel":
        this.background.draw();
        this.ctx.textAlign = "center";
        this.ctx.font = this.fontBig;
        this.ctx.fillStyle = 'rgba(255,255,255,1)';
        this.ctx.fillText(`Well done! :)`, this.width / 2 , this.height / 2 - 50);
        this.ctx.textAlign = "center";
        this.ctx.font = this.fontMed;
        this.ctx.fillStyle = 'rgba(255,255,255,1)';
        this.ctx.fillText(`Ready for the next level? Press Enter`, this.width / 2, this.height / 2 + 50);
        break;

      case "youWin":
        this.background.draw();
        this.ctx.textAlign = "center";
        this.ctx.font = this.fontBig;
        this.ctx.fillStyle = 'rgba(255,255,255,1)';
        this.ctx.fillText(`OU YEAH!! YOU WIN!!`, this.width / 2 , this.height / 2 - 50);
        this.ctx.textAlign = "center";
        this.ctx.font = this.fontMed;
        this.ctx.fillStyle = 'rgba(255,255,255,1)';
        this.ctx.fillText(`It seems that we have an arkanoid master gamer here ;)`, this.width / 2, this.height / 2 + 50);
        break;

      case "liveLost":
      this.ctx.textAlign = "center";
      this.ctx.font = "50px courier_new";
      this.ctx.fillStyle = 'rgba(255,255,255,0.7)';
      this.ctx.fillText("Live -1", 55, 20,this.width / 2, this.height / 2 + 150) ;
      break;
    }
  }


}