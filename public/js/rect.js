class Rect{
    constructor(x,y,w,h){
        this.position = new Vector2(x,y);
        this.width = w;
        this.height = h;
    }
    topRight(){
        var topRight = this.position;
        topRight.x += this.width;
        return topRight;
    }
    center(){
        var center = this.position;
        center.x += this.width/2;
        center.y += this.height/2;
        return center;
    }
    bottomLeft(){
        var bottomLeft = this.position;
        bottomLeft.y += this.height;
        return bottomLeft;
    }
    bottomRight(){
        var bottomRight = this.position;
        bottomRight.x += this.width;
        bottomRight.y += this.height;
        return bottomRight;
    }
}