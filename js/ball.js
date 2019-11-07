class Ball{
    constructor(ctx, width, height, gameWidth, gameHeigth, playerPosX ,playerPosY, playerWidth,margin){
        this.ctx = ctx
        this.width = width
        this.height = height
        this.margin = margin
        this.posX = gameWidth/2 - this.width/2
        this.posY = gameHeigth/2
        this.posY0 = playerPosY - this.height
        this.playerPoxX = playerPosX
        this.playerPosY = playerPosY
        this.playerWidth = playerWidth
        this.boundarys = {
            top : this.margin,
            rigth : gameWidth-this.margin,
            bottom: gameHeigth-this.margin,
            left : this.margin
        }

        this.vx = 4
        this.vy = 4

    }

        
draw(){

    this.ctx.beginPath();
    this.ctx.arc(this.posX+this.height/2,this.posY+this.height/2, this.height/2,0,Math.PI*2)
    this.ctx.fillStyle = 'rgba(255,255,255,0.4';
    this.ctx.fill();
    this.ctx.stroke()
    this.ctx.closePath()
}

move(){
    if(this.posY + this.height> this.boundarys.bottom){
        this.vy = -this.vy
    }

    if(this.posX < this.boundarys.left){
       this.vx = -this.vx
    }

    if(this.posY < this.boundarys.top){
        this.vy = -this.vy   
    }

    if(this.posX + this.width > this.boundarys.rigth){
        this.vx = -this.vx
    } 

    this.posX = this.posX + this.vx   
    this.posY = this.posY + this.vy 
}
}