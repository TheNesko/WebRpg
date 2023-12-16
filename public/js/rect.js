class Rect{
    constructor(x,y,w,h){
        this.position = new Vector2(x,y);
        this.width = w;
        this.height = h;
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
}