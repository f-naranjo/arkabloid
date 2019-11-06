class Brick{
    constructor(ctx, posX, posY, width, height, gameWidth, gameHeight,){
        this.ctx = ctx,
        
        this.posX = posX,
        this.posY = posY,
        this.width = width,
        this.height = height,
        this.resistance = Math.floor(Math.random() * 3 + 1 ),
        this.hits = 0,
        this.hasBooster = Math.floor(Math.random() * 2 + 1 ),
        this.gameWidth = gameWidth,
        this.gameHeight = gameHeight

    }


    draw(){
        
        this.ctx.fillStyle = `rgba(255,255,255, ${this.resistance*0.15})`
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = 'rgba(255,255,255,1)'
        this.ctx.strokeRect(this.posX,this.posY,this.width,this.height)
        this.ctx.fillRect(this.posX,this.posY,this.width,this.height)


    }



}