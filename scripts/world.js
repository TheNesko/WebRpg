const gameCanvas = document.getElementById("game-canvas");
const ctx = gameCanvas.getContext("2d");
const canvasWidth = gameCanvas.width;
const canvasHeight = gameCanvas.height;

var lastUpdate = Date.now();

var position = [0,0];
var delta = 0;

(function (){
    console.log(ctx);
    setInterval(deltaTime, 0);
    setInterval(update, 16.6666);
})();

function deltaTime(){
    var now = Date.now();
    delta = (now - lastUpdate)/1000;
    lastUpdate = now;
}

function update(){
    //draw
    draw();
    for(const entity of entityList){
        entity.draw();
    }
    //gamelogic
    for(const entity of entityList){
        entity.update();
    }
    //imput handle
    input.clearInputs();
}

function draw(){
    ctx.clearRect(0,0,canvasWidth,canvasHeight);
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvasWidth,canvasHeight);
}