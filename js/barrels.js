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
        this.ctx.fillStyle = 'rgb(59,62,64)'
        this.ctx.fillRect(this.posX,this.posY,this.width,this.height)
        
    }

    move(){
        this.posX += this.vx
    }



}