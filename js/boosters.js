class Booster{
    constructor(ctx, width, height, brickPosX, brickPosY, brickWidth, brickHeight){
        this.ctx = ctx

        this.width = width
        this.height = height

        this.brickPosX = brickPosX
        this.brickPosY = brickPosY

        this.posX = brickPosX + brickWidth/2
        this.posY = brickPosY + brickHeight

        this.vy = 2
        this.gravity = 0.05
    }
        
draw(){
    this.ctx.beginPath();
    this.ctx.arc(this.posX+this.height/2,this.posY+this.height/2, this.height/2,0,Math.PI*2)
    this.ctx.fillStyle = 'rgba(255,255,255,0.2';
    this.ctx.fill();
    this.ctx.stroke()
    this.ctx.closePath()
}

move(){ 
    this.gravity = this.gravity + 0.02
    this.posY = this.posY + this.vy*this.gravity
}



}