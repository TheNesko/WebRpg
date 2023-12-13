var lastUpdate = Date.now();

var delta = 0;

function deltaTime(){
    var now = Date.now();
    delta = (now - lastUpdate)/1000;
    lastUpdate = now;
}