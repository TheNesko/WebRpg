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
    constructor(){
        super();
        this.pos = new Vector2(500,500);
    }
    update(){
        this.pos.x -= 50*delta;
    }
    draw(){
        renderer.drawRect(this.pos,100,25,"red");
    }
}
const block = new Block();