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
    drawRect(...args){
        var args = args[0];
        ctx.fillStyle = args[3];
        ctx.fillRect(args[0].x,args[0].y,args[1],args[2]);
    }
    drawText(...args){
        var args = args[0];
        ctx.font = args[1];
        var pos = args[0];
        ctx.fillStyle = args[3];
        ctx.fillText(args[2],pos.x,pos.y);
    }
}

class RenderIndex{
    constructor(){
        this.background = 0;
        this.default = 1;
        this.enemy = 4;
        this.player = 5;
        this.UI = 10;
    }
}
const renderIndex = new RenderIndex();

class RenderQueue{
    constructor(renderer){
        this.renderer = renderer;
        this.Queue = [];
    }
    updateQueue(){
        // sort render queue
        var sortedQueue = {};
        for(var call in this.Queue){
            var index = this.Queue[call]["index"];
            if(!sortedQueue.hasOwnProperty(index)){
                sortedQueue[index] = [];
            }
            sortedQueue[index].push(this.Queue[call]);
        }
        // clear screen
        this.renderer.clearScreen();
        // render background first
        this.renderer.drawBackground();
        // foreground elements next
        // UI elements are rendered last
        for(var index in sortedQueue){
            for(var call in sortedQueue[index]){
                var args = sortedQueue[index][call]["args"];
                sortedQueue[index][call]["name"](args);
            }
        }
        // clear render queue
        this.clearQueue();
    }
    clearQueue(){
        this.Queue = [];
    }
    updateCamera(){
        this.renderer.currentCamera.update();
    }
    addToQueue(func,args,index){
        this.Queue.push({"name":func,"args":args,"index":index});
    }
    drawRect(pos,width,height,color,zIndex=renderIndex.default){
        var pos = this.renderer.offsetPosition(pos);
        var args = [pos,width,height,color];
        this.addToQueue(this.renderer.drawRect,args,zIndex);
    }
    drawText(pos,text,color="black",font="24px serif",zIndex=renderIndex.UI){
        var pos = this.renderer.offsetPosition(pos);
        var args = [pos,font,text,color];
        this.addToQueue(this.renderer.drawText,args,zIndex);
    }

    drawTextLocal(pos,text,color="black",font="24px serif",zIndex=renderIndex.UI){
        var args = [pos,font,text,color];
        this.addToQueue(this.renderer.drawText,args,zIndex);
    }
}

const renderer = new RenderQueue(new Renderer(playerCamera));