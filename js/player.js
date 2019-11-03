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

            this.vx = 10;

        this.keys = {
            LEFT_KEY: playerKeys.LEFT_KEY,
            RIGHT_KEY: playerKeys.RIGHT_KEY
        }

        this.setListeners()

    }

    draw() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
        if (this.rightPressed) {
            this.posX += this.vx;
        } else if (this.leftPressed) {
            this.posX -= this.vx;
        }
    }

    move() {

    }

    setListeners() {
        // this.rightPressed = false;
        // this.leftPressed = false;
       
        // document.addEventListener("keydown", keyDownHandler, false);
        // document.addEventListener("keyup", keyUpHandler, false);

        // function keyDownHandler(e) {
        //     if(e.keyCode === 37){
        //         this.rightPressed = true;
        //         console.log("hola")
        //     }
        //     else if(e.keyCode === 39){
        //         this.leftPressed = true;
        //     }
         
        // }

        // function keyUpHandler(e) {
        //     if(e.keyCode === 37){
        //         console.log("adios")
        //         this.rightPressed = false;
        //     }
        //     else if(e.keyCode === 39){
        //         this.leftPressed = false;
        //     }
         
        // }
        
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case this.keys.LEFT_KEY:
                    if (this.posX <= this.leftLimit) {
                        break;
                    }
                    this.posX -= this.vx;
                    break;

                case this.keys.RIGHT_KEY:
                    console.log(this.posX)
                    if (this.posX + this.width >= this.rigthLimit) {

                        break;
                    }
                    this.posX += this.vx;
                    break;
            }
        })


    }

}