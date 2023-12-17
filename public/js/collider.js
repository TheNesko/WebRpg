class CollisionLayer{
    constructor(){
        this.colliders = [];
    }
    add(collider){
        this.colliders.push(collider);
    }
    remove(collider){
        this.colliders.splice(this.colliders.indexOf(collider));
    }
}
const collisionLayers = [];
(function(){
    for(var i = 0; i < 10; i++){
        collisionLayers.push(new CollisionLayer());
    }
})();

class Collider extends Object{
    #collisionTolerance = 5;
    constructor(parent,rect,detectionLayer=0,collisionLayer=0){
        super();
        this.parent = parent;
        this.shape = rect;
        collisionLayers[detectionLayer].add(this);
        this.collisionLayer = collisionLayer;
    }
    update(){
        this.rect = this.parent.rect;
    }
    collisionTolerance(uno,dos){
        if(Math.abs(uno-dos) < this.#collisionTolerance){
            return true;
        }
        return false;
    }
    collideCheck(collider){
        if(collider == this){return false;}
        if (this.shape.position.x + this.shape.width > collider.shape.position.x &&  
            this.shape.position.x < collider.shape.position.x + collider.shape.width &&  
            this.shape.position.y + this.shape.height > collider.shape.position.y &&  
            this.shape.position.y < collider.shape.position.y + collider.shape.height) {
            return true;
        }
        return false;
    }
    getColliders(){
        var collideWith = [];
        for(var collider in collisionLayers[this.collisionLayer].colliders){
            collider = collisionLayers[this.collisionLayer].colliders[collider];
            if (this.collideCheck(collider)) {
                collideWith.push(collider);
            }
        }
        return collideWith;
    }
}
