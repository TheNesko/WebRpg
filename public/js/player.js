class Player extends Entity{
    constructor(){
        super();
        this.rect = new Rect(350,250,25,40);
        this.collider = new Collider(this,this.rect,0,0);
        this.velocity = new Vector2(0,0);
        this.acceleration = 90;
        this.friction = 0.80;
        this.maxSpeed = 600;
    }

    update(){
        if(input.isKeyPressed("KeyW")){
            this.velocity.y -= this.acceleration;
        }
        else if(input.isKeyPressed("KeyS")){
            this.velocity.y += this.acceleration;
        }
        else{
            this.velocity.y *= (this.friction);
        }
        this.velocity.y = roundClosestToZero(clamp(this.velocity.y,-this.maxSpeed,this.maxSpeed));

        if(input.isKeyPressed("KeyA")){
            this.velocity.x -= this.acceleration;
        }
        else if(input.isKeyPressed("KeyD")){
            this.velocity.x += this.acceleration;
        }
        else{
            this.velocity.x *= (this.friction);
        }
        this.velocity.x = roundClosestToZero(clamp(this.velocity.x,-this.maxSpeed,this.maxSpeed));

        this.normalized = this.velocity.normalize();
        this.rect.position.x += Math.abs(this.normalized.x)*this.velocity.x*delta;
        this.rect.position.y += Math.abs(this.normalized.y)*this.velocity.y*delta;

        playerCamera.position = this.rect.center();
        this.collider.update();
        var colliders = this.collider.getColliders();
        if(colliders.length != 0){
            for(var index in colliders){
                var collider = colliders[index];
                if(this.collider.collisionTolerance(this.rect.left,collider.shape.right)){
                    this.velocity.x = 0;
                    this.rect.left = collider.shape.right;
                }
                if(this.collider.collisionTolerance(this.rect.top,collider.shape.bottom)){
                    this.velocity.y = 0;
                    this.rect.top = collider.shape.bottom;
                }
                if(this.collider.collisionTolerance(this.rect.right,collider.shape.left)){
                    this.velocity.x = 0;
                    this.rect.right = collider.shape.left;
                }
                if(this.collider.collisionTolerance(this.rect.bottom,collider.shape.top)){
                    this.velocity.y = 0;
                    this.rect.bottom = collider.shape.top;
                }
            }
        }
        
    }
    
    draw(){
        renderer.drawRect(this.rect.position,this.rect.width,this.rect.height,"grey",renderIndex.player);
    }
}
const player = new Player();
