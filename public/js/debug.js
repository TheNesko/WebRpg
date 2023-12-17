class Debug{
    constructor(){
    }
    update(){
        renderer.drawTextLocal(new Vector2(10,30),"Debug Mode");
        renderer.drawTextLocal(new Vector2(10,50),"Velocity x:"+Math.round(player.rect.position.x)+" y:"+Math.round(player.rect.position.y));
        renderer.drawTextLocal(new Vector2(10,70),"Velocity x:"+player.velocity.x+" y:"+player.velocity.y);
    }
}
const debug = new Debug();