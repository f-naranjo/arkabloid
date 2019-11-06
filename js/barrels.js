class Barrel{
    constructor(ctx, posX, posY, width, height, gameWidth, gameHeight,){
        this.ctx = ctx,
        
        this.posX = posX,
        this.posY = posY,
        this.width = width,
        this.height = height,

        this.gameWidth = gameWidth,
        this.gameHeight = gameHeight,

        this.vx = 2

    }


    draw(){
        // this.ctx.fillStyle = 'rgb(59,62,64)'
        // this.ctx.fillRect(this.posX,this.posY,this.width,this.height)
        this.ctx.beginPath();
        this.ctx.arc(this.posX+this.height/2,this.posY+this.height/2, this.height/2,0,Math.PI*2)
        this.ctx.fillStyle = 'rgba(255,255,255,0.1)';
        this.ctx.fill();
        this.ctx.stroke()
        this.ctx.closePath()
    }

    move(){
        this.posX += this.vx
    }



}