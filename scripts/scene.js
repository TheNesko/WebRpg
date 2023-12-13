class SceneHandler{
    constructor(renderer){
        this.currentScene;
        this.sceneList = [];
        this.renderer = renderer;
    }
    loadScene(scene){
        this.currentScene = scene;
    }
    updateScene(){
        this.renderer.draw();
        this.currentScene.draw();
        this.currentScene.update();
    }
}
const scenehndl = new SceneHandler(renderer);

class Scene{
    constructor(sceneHandler){
        sceneHandler.sceneList.push(this);
        this.sceneHandler = sceneHandler;
        this.entityList = [];
        
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
const testScene = new Scene(scenehndl);
const testScene2 = new Scene(scenehndl);