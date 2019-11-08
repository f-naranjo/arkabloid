class PosRef{
    constructor(ctx){
        this.ctx = ctx,
        this.white80 = 'rgba(255,255,255,0.8'

    }


    draw(posX0, posY0, posX1,posY1){
        this.ctx.beginPath();
        this.ctx.moveTo(posX0,posY0);
        this.ctx.lineTo(posX1,posY1);
        this.ctx.strokeStyle = this.white80;
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
    }


}