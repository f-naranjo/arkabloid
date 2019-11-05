class Player {
    constructor(ctx, width, height, gameWidth, gameHeight, playerKeys) {
        this.ctx = ctx;
        this.width = width,
            this.height = height,
            this.gameHeight = gameHeight,
            this.gameWidth = gameWidth
            this.leftLimit = 0,
            this.rigthLimit = gameWidth,

            this.posX = gameWidth / 2 - this.width / 2,
            this.posY = gameHeight - 50,
            this.posY0 = gameHeight - 50,



            this.vy = 1;
            this.gravity = 0.4;
            this.isFloating = false;
            this.isHero = false;

        // this.posX0 = this.posx - this.width / 2,

        this.vx = 10;

        this.keys = {
            LEFT_KEY: playerKeys.LEFT_KEY,
            RIGHT_KEY: playerKeys.RIGHT_KEY,
            ARROW_UP: playerKeys.ARROW_UP
        }

        this.keyState = {
            keyLeft: false,
            keyRight: false
        }

        this.setListeners()

    }

    draw() {
        this.ctx.fillStyle = 'rgb(211,222,230)';
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);

    }

    move() {
        if (this.keyState.keyLeft && this.posX > this.leftLimit) {
            this.posX -= this.vx
        }
        if (this.keyState.keyRight && this.posX + this.width < this.rigthLimit) {
            this.posX += this.vx
        }

        if(this.posY <= this.posY0 && this.isFloating === false) {
            this.posY += this.vy;
            this.vy += this.gravity;
          } else if(this.isFloating === false) {
            this.vy = 1;
            this.posY = this.posY0;
          }

    }


    setListeners(){
    
    document.addEventListener('keydown', (e) => {
        e.preventDefault();
        if (e.keyCode === 37) {
            this.keyState.keyLeft = true;
        }
        if (e.keyCode === 39) {
            this.keyState.keyRight = true;
        }
        if (e.keyCode === 38) {
         
            if(this.posY < this.posY0){
                return
            }
            this.posY -=this.vy;
            this.vy -= 10
           
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

    checkState(){
        if(this.isHero){ 
            this.posY = this.gameHeight - 100
            this.posY0 = this.gameHeight - 100
        }else return false
    }

}



