class Booster{
    constructor(ctx, width, height, brickPosX, brickPosY, brickWidth, brickHeight){
        this.ctx = ctx

        this.width = width
        this.height = height

        this.brickPosX = brickPosX
        this.brickPosY = brickPosY

        this.posX = brickPosX + brickWidth/2
        this.posY = brickPosY + brickHeight

        this.vy = 3
    }
        
draw(){
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
}

move(){ 
    this.posY = this.posY + this.vy 
}



}