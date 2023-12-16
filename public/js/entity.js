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
        this.rect = new Rect(250,250,100,25)
    }
    update(){
        
    }
    draw(){
        renderer.drawRect(this.rect.position,this.rect.width,this.rect.height,"red");
    }
}
const block = new Block();