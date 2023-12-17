const test1 = "Indel";
const test2 = "Admin123";
query = {login: test1,password: test2};

(function (){
    setInterval(deltaTime, 0);
    scenehndl.loadScene(testScene);
    setInterval(gameLoop, 16.6666);
})();

function gameLoop(){
    //gamelogic
    debug.update();
    scenehndl.updateScene();
    //imput handle
    input.clearInputs();
}