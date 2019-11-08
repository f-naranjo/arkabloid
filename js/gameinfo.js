class Gameinfo{
    constructor(ctx, globalWidth, globalHeight){
        this.ctx = ctx
        this.width = globalWidth
        this.height = globalHeight
    }
        
draw(framesCounter, livesCounter, bricksCounter, bricksLeft, ballPosX, ballPosY){

    this.ctx.textAlign = "right";
    this.ctx.font = "12px courier_new";
    this.ctx.fillStyle = 'rgba(255,255,255,0.7)';
    this.ctx.fillText(`Bricks left: ${bricksLeft}`, this.width-40, 20);
  
    this.ctx.textAlign = "center";
    this.ctx.font = "12px courier_new";
    this.ctx.fillStyle = 'rgba(255,255,255,0.7)';
    this.ctx.fillText(`X: ${Math.floor(ballPosX)} Y: ${Math.floor(ballPosY)}`, this.width/2, 20);

    this.ctx.textAlign = "left";
    this.ctx.font = "18px courier_new";
    this.ctx.fillStyle = 'rgba(255,255,255,0.7)';
    this.ctx.fillText(`♥`, 40, 20);

    this.ctx.textAlign = "left";
    this.ctx.font = "12px courier_new";
    this.ctx.fillStyle = 'rgba(255,255,255,0.7)';
    this.ctx.fillText(`${livesCounter}`, 55, 20);

    // this.ctx.font = "12px Arial";
    // this.ctx.fillStyle = 'rgba(255,255,255,0.7)';
    // this.ctx.fillText(`Web Dev Bootcamp ❤ Ironhack`, 35, this.height-10);

}


}