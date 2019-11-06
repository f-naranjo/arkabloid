class Ball{
    constructor(ctx, width, height, gameWidth, gameHeigth, playerPosX ,playerPosY, playerWidth){
        this.ctx = ctx
        this.width = width
        this.height = height
        this.posX = gameWidth/2 - this.width/2
        this.posY = playerPosY - this.height
        this.posY0 = playerPosY - this.height
        this.playerPoxX = playerPosX
        this.playerPosY = playerPosY
        this.playerWidth = playerWidth
        this.boundarys = {
            top : 0,
            rigth : gameWidth,
            bottom: gameHeigth,
            left : 0
        }

        this.vx = 3
        this.vy = 3

    }

        
draw(){
    // this.ctx.fillStyle = 'rgb(211,222,230)';
    // this.ctx.fillRect(this.posX, this.posY, this.width, this.height);

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