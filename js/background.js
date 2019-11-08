class Background {
  constructor(ctx, width, height, margin, margin2) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.posX = 0;
    this.posY = 0;

    this.margin = margin;
    this.margin2 = margin2;

    this.blue = 'rgba(47,88,170,1)'
    this.white50 = 'rgba(255,255,255,0.5)'
    this.white02 = 'rgba(255,255,255,0.1)'
    this.white07 = 'rgba(255,255,255,0.07)'
    
    
  }

  draw() {

    this.ctx.fillStyle = this.white07;
    this.ctx.fillRect(this.margin2, this.margin2, this.margin2, this.height-this.margin);
    this.ctx.stroke();

    this.ctx.fillStyle = this.white07;
    this.ctx.fillRect(this.margin2*2, this.margin2, this.width-this.margin*2, this.margin2);
    this.ctx.stroke();

    this.ctx.fillStyle = this.white07;
    this.ctx.fillRect(this.width-this.margin, this.margin2, this.margin2, this.height - this.margin);
    this.ctx.stroke();

    this.ctx.fillStyle = this.white07;
    this.ctx.fillRect(this.margin2*2, this.height-this.margin, this.width-this.margin*2, this.margin2);
    this.ctx.stroke();

    //Corner Lines

    //Upper Left
    this.ctx.beginPath();
    this.ctx.moveTo(this.margin2-10, this.margin2);
    this.ctx.lineTo(this.margin2+20, this.margin2);
    this.ctx.strokeStyle = this.white50;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(this.margin2,this.margin2-10);
    this.ctx.lineTo(this.margin2,this.margin2+20);
    this.ctx.strokeStyle = this.white50;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(this.margin+10,this.margin);
    this.ctx.lineTo(this.margin,this.margin);
    this.ctx.lineTo(this.margin,this.margin+10);
    this.ctx.strokeStyle = this.white50;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

     //Upper Right
    this.ctx.beginPath();
    this.ctx.moveTo(this.width-this.margin2+10, this.margin2);
    this.ctx.lineTo(this.width-this.margin2-20, this.margin2);
    this.ctx.strokeStyle = this.white50;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(this.width-this.margin2, this.margin2-10);
    this.ctx.lineTo(this.width-this.margin2, this.margin2+20);
    this.ctx.strokeStyle = this.white50;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    
    this.ctx.beginPath();
    this.ctx.moveTo(this.width-this.margin,this.margin+10);
    this.ctx.lineTo(this.width-this.margin,this.margin);
    this.ctx.lineTo(this.width-this.margin-10,this.margin);
    this.ctx.strokeStyle = this.white50;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

   //Down Left
   this.ctx.beginPath();
   this.ctx.moveTo(this.margin2-10,this.height-this.margin2);
   this.ctx.lineTo(this.margin2+20,this.height-this.margin2);
   this.ctx.strokeStyle = this.white50;
   this.ctx.lineWidth = 2;
   this.ctx.stroke();

   this.ctx.beginPath();
   this.ctx.moveTo(this.margin2,this.height-this.margin2-20);
   this.ctx.lineTo(this.margin2,this.height-this.margin2+10);
   this.ctx.strokeStyle = this.white50;
   this.ctx.lineWidth = 2;
   this.ctx.stroke();

   this.ctx.beginPath();
   this.ctx.moveTo(this.margin, this.height-this.margin-10);
   this.ctx.lineTo(this.margin, this.height-this.margin);
   this.ctx.lineTo(this.margin+10, this.height-this.margin);
   this.ctx.strokeStyle = this.white50;
   this.ctx.lineWidth = 2;
   this.ctx.stroke();

  //Down Right
   this.ctx.beginPath();
   this.ctx.moveTo(this.width-this.margin2+10,this.height-this.margin2);
   this.ctx.lineTo(this.width-this.margin2-20,this.height-this.margin2);
   this.ctx.strokeStyle = this.white50;
   this.ctx.lineWidth = 2;
   this.ctx.stroke();

   this.ctx.beginPath();
   this.ctx.moveTo(this.width-this.margin2,this.height-this.margin2-20);
   this.ctx.lineTo(this.width-this.margin2,this.height-this.margin2+10);
   this.ctx.strokeStyle = this.white50;
   this.ctx.lineWidth = 2;
   this.ctx.stroke();

   this.ctx.beginPath();
   this.ctx.moveTo(this.width-this.margin-10,this.height-this.margin);
   this.ctx.lineTo(this.width-this.margin,this.height-this.margin);
   this.ctx.lineTo(this.width-this.margin,this.height-this.margin-10);
   this.ctx.strokeStyle = this.white50;
   this.ctx.lineWidth = 2;
   this.ctx.stroke();


  }

  
}