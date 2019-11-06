class Info{
    constructor(ctx, frameCounter){
        this.ctx = ctx

        this.width = width
        this.height = height

        this.brickPosX = brickPosX
        this.brickPosY = brickPosY

        this.posX = brickPosX + brickWidth/2
        this.posY = brickPosY + brickHeight

    }
        
draw(){
    this.ctx.beginPath();
    this.ctx.arc(this.posX+this.height/2,this.posY+this.height/2, this.height/2,0,Math.PI*2)
    this.ctx.fillStyle = 'rgba(255,255,255,0.2';
    this.ctx.fill();
    this.ctx.stroke()
    this.ctx.closePath()
}


}