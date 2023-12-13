const gameCanvas = document.getElementById("game-canvas");
const ctx = gameCanvas.getContext("2d");
const canvasWidth = gameCanvas.width;
const canvasHeight = gameCanvas.height;

class Renderer{
    constructor(){

    }
    draw(){
        ctx.clearRect(0,0,canvasWidth,canvasHeight);
        ctx.fillStyle = "#14c";
        ctx.fillRect(0,0,canvasWidth,canvasHeight);
    }

}
const renderer = new Renderer();