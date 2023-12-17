class Rect{
    constructor(x,y,w,h){
        this.position = new Vector2(x,y);
        this.width = w;
        this.height = h;
    }
    topLeft(){
        return new Vector2(this.position.x,this.position.y);
    }
    topRight(){
        var topRight = new Vector2(this.position.x,this.position.y);
        topRight.x += this.width;
        return topRight;
    }
    center(){
        var center = new Vector2(this.position.x,this.position.y);
        center.x += this.width/2;
        center.y += this.height/2;
        return center;
    }
    bottomLeft(){
        var bottomLeft = new Vector2(this.position.x,this.position.y);
        bottomLeft.y += this.height;
        return bottomLeft;
    }
    bottomRight(){
        var bottomRight = new Vector2(this.position.x,this.position.y);
        bottomRight.x += this.width;
        bottomRight.y += this.height;
        return bottomRight;
    }
    get top(){
        return this.position.y;
    }
    set top(value){
        this.position.y = value;
    }
    get bottom(){
        return this.position.y + this.height;
    }
    set bottom(value){
        this.position.y = value-this.height;
    }
    get left(){
        return this.position.x;
    }
    set left(value){
        this.position.x = value;
    }
    get right(){
        return this.position.x + this.width;
    }
    set right(value){
        this.position.x = value-this.width;
    }
}