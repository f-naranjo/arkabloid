class Brick{
    constructor(ctx, posX, posY, width, height, gameWidth, gameHeight,){
        this.ctx = ctx,
        
        this.posX = posX,
        this.posY = posY,
        this.width = width,
        this.height = height,

        this.gameWidth = gameWidth,
        this.gameHeight = gameHeight

    }


    draw(){
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.posX,this.posY,this.width,this.height)
    }



}