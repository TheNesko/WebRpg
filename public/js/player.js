class Player extends Entity{
    constructor(){
        super();
        this.rect = new Rect(350,250,25,40);
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
        console.log(this.velocity);
    }
    
    draw(){
        renderer.drawRect(this.rect.position,this.rect.width,this.rect.height,"grey",renderIndex.player);
    }
}
const player = new Player();
