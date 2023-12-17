class Entity{
    constructor(){

    }
    update(){

    }
    draw(){
        
    }
    remove(){
        
    }
}


class Block extends Entity{
    constructor(x,y,w,h){
        super();
        this.rect = new Rect(x,y,w,h);
        this.collider = new Collider(this,this.rect,0,0);
    }
    update(){
        this.collider.update();
    }
    draw(){
        renderer.drawRect(this.rect.position,this.rect.width,this.rect.height,"red");
    }
}
const block = new Block(0,0,10,500);
const block1 = new Block(490,0,10,500);
const block2 = new Block(0,0,500,10);
const block3 = new Block(0,490,500,10);