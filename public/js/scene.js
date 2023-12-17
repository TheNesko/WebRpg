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
        this.currentScene.update();
        renderer.updateCamera();
        this.currentScene.draw();
        renderer.updateQueue();
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
        this.entityList.push(block1);
        this.entityList.push(block2);
        this.entityList.push(block3);
    }
    update(){
        super.update();
    }
    draw(){
        super.draw();
    }
}
const testScene = new TestScene(scenehndl);