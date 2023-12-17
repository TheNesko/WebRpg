class Ray extends Object{
    #colliders = [];
    constructor(startPosition,targetPosition,lenght=99999,collisionLayer=0){
        this.position = startPosition;
        this.destination = targetPosition;
        this.lenght = lenght;
        this.collisionLayer = collisionLayer;
        this.enabled = true;
    }
    update(){
        
    }
    draw(){

    }
    getColliders(){
        return this.#colliders;
    }
    isColliding(){
        return this.#colliders.length != 0;
    }
}