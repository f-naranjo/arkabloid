class Player {
    constructor(ctx, width, height, gameWidth, gameHeigth, playerKeys) {
        this.ctx = ctx;
        this.width = width,
            this.height = height,

            this.leftLimit = 0,
            this.rigthLimit = gameWidth,

            this.posX = gameWidth / 2 - this.width / 2,
            this.posY = gameHeigth - 50,

            // this.posX0 = this.posx - this.width / 2,

            this.vx = 15;

        this.keys = {
            LEFT_KEY: playerKeys.LEFT_KEY,
            RIGHT_KEY: playerKeys.RIGHT_KEY
        }

        this.keyState = {
            keyLeft : false,
            keyRight : false
          }

        this.setListeners()
     

    }

    draw() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }

    move() {
        if(this.keyState.keyLeft && this.posX > this.leftLimit){
            this.posX -= this.vx
          }
          if(this.keyState.keyRight && this.posX+this.width < this.rigthLimit){
            this.posX += this.vx}
    }

    setListeners() {
          document.addEventListener('keydown', (e) => {
            e.preventDefault();
            if (e.keyCode === 37) {
                this.keyState.keyLeft = true;
            }
            if (e.keyCode === 39) {
                this.keyState.keyRight = true;
            }
          })

          document.addEventListener('keyup', (e) => {
            e.preventDefault();
            if (e.keyCode === 37) {
                this.keyState.keyLeft = false;
            }
            if (e.keyCode === 39) {
                this.keyState.keyRight = false;
            }
          })

    }

}