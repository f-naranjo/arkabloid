class Gameinfo{
    constructor(ctx, globalWidth, globalHeight){
        this.ctx = ctx
        this.width = globalWidth
        this.height = globalHeight
    }
        
draw(framesCounter, livesCounter, bricksCounter, bricksLeft, ballPosX, ballPosY){
    // this.ctx.font = "12px Arial";
    // this.ctx.fillStyle = 'rgba(255,255,255,0.7)';
    // this.ctx.fillText(`Time: ${Math.floor(framesCounter/100)}`, this.width-80, 20);

    this.ctx.font = "12px Arial";
    this.ctx.fillStyle = 'rgba(255,255,255,0.7)';
    this.ctx.fillText(`Bricks left: ${bricksLeft}`, this.width-110, 20);
  

    this.ctx.font = "12px Arial";
    this.ctx.fillStyle = 'rgba(255,255,255,0.7)';
    this.ctx.fillText(`X: ${Math.floor(ballPosX)} Y: ${Math.floor(ballPosY)}`, this.width/2 - 40, 20);

    this.ctx.font = "12px Arial";
    this.ctx.fillStyle = 'rgba(255,255,255,0.7)';
    this.ctx.fillText(`Lives: ${livesCounter}`, 40, 20);

    


    // this.ctx.font = "12px Arial";
    // this.ctx.fillStyle = 'rgba(255,255,255,0.7)';
    // this.ctx.fillText(`First project // Web Dev Bootcamp ❤ Ironhack`, 35, this.height-10);

}


}