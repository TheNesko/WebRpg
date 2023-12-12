class Vector2{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    normalize(){
        if(this.x == 0 && this.y == 0){
            return new Vector2(1,1);
        }
        var newX;
        var newY;
        var length = Math.sqrt(this.x*this.x + this.y*this.y);
        newX = this.x / length;
        newY = this.y / length;
        return new Vector2(newX,newY);
    }
}

function clamp(value,min,max){
    if (value > max){
        value = max;
    }
    if (value < min){
        value = min;
    }
    return value
}

function roundClosestToZero(value){
    if (value < 0){
        return Math.ceil(value);
    }
    return Math.floor(value);
}