class Player extends Entity{
    constructor(scene){
        super(scene);
        this.position = new Vector2(350,250);
        this.velocity = new Vector2(0,0);
        this.size = new Vector2(25,40);
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

        this.position.x += Math.abs(this.normalized.x)*this.velocity.x*delta;
        this.position.y += Math.abs(this.normalized.y)*this.velocity.y*delta;
    }
    
    draw(){
        ctx.fillStyle = "Red";
        ctx.fillRect(this.position.x,this.position.y,this.size.x,this.size.y);
    }
}
const player = new Player(testScene);
const player2 = new Player(testScene2);
