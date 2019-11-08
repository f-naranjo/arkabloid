const BackgroundGame = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  fps: 60,
  framesCounter: 0,
  playerKeys: {
    LEFT_KEY: 37,
    ARROW_UP: 38,
    RIGHT_KEY: 39,
    SPACE: 32,
  },
  gameInterval:undefined,


  init: function () {
    this.canvas = document.getElementById('canvas-background');
    this.ctx = this.canvas.getContext('2d');
    this.width = window.innerWidth * 0.9;
    if (this.width > 900) {
      this.width = 900;
    }
    this.height = window.innerHeight * 0.9;
    if (this.height > 900) {
      this.height = 900
    }
    this.canvas.width = this.width;
    this.canvas.height = this.height;

  }
}
