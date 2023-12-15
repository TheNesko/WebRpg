class Camera{
    constructor(){
        this.position = new Vector2(0,0);
        this.centerOffset = new Vector2(canvasWidth/2,canvasHeight/2);
        this.offset = new Vector2(0,0);
    }
    update(){
        this.offset.x = this.position.x - this.centerOffset.x;
        this.offset.y = this.position.y - this.centerOffset.y;
    }
}
const playerCamera = new Camera();

class Renderer{
    constructor(camera){
        this.currentCamera = camera;
    }
    clearScreen(){
        ctx.clearRect(0,0,canvasWidth,canvasHeight);
    }
    drawBackground(){
        ctx.fillStyle = "#bbb";
        ctx.fillRect(0,0,canvasWidth,canvasHeight);
    }
    offsetPosition(pos){
        return new Vector2(pos.x-this.currentCamera.offset.x,pos.y-this.currentCamera.offset.y);
    }
    drawRect(pos,width,height,color){
        ctx.fillStyle = color;
        pos = this.offsetPosition(pos);
        ctx.fillRect(pos.x,pos.y,width,height);

    }
}
const renderer = new Renderer(playerCamera);