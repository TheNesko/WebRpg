class SceneHandler{
    constructor(r){
        this.currentScene;
        this.sceneList = [];
    }
    loadScene(scene){
        this.currentScene = scene;
        this.currentScene.ready();
    }
    updateScene(){
        renderer.clearScreen();
        renderer.drawBackground();
        renderer.currentCamera.update();
        this.currentScene.draw();
        this.currentScene.update();
    }
}
const scenehndl = new SceneHandler();

class Scene{
    constructor(sceneHandler){
        sceneHandler.sceneList.push(this);
        this.sceneHandler = sceneHandler;
        this.entityList = [];
    }
    ready(){
        
    }
    update(){
        for(const entity of this.entityList){
            entity.update();
        }
    }
    draw(){
        for(const entity of this.entityList){
            entity.draw();
        }
    }
}

class TestScene extends Scene{
    constructor(sceneHandler){
        super(sceneHandler);
    }
    ready(){
        super.ready();
        this.entityList.push(player);
        this.entityList.push(block);
    }
    update(){
        super.update();
    }
    draw(){
        super.draw();
    }
}
const testScene = new TestScene(scenehndl);