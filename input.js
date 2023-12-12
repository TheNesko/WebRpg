class Input{
    constructor(){
        window.addEventListener("keydown", this.keyDownHandler.bind(this), false);
        window.addEventListener("keyup", this.keyUpHandler.bind(this), false);
        window.addEventListener("mousedown", this.mouseDownHandler.bind(this), false);
        window.addEventListener("mouseup", this.mouseUpHandler.bind(this), false);
        this.keyPressed = [];
        this.keyDown = [];
        this.keyUp = [];
    }
    
    clearInputs(){
        this.keyDown = [];
        this.keyUp = [];
    }

    isKeyDown(keyName){
        if (this.keyDown[this.keyDown.indexOf(keyName)]){
            return true;
        }
        return false;
    }

    isKeyUp(keyName){
        if (this.keyUp[this.keyUp.indexOf(keyName)]){
            return true;
        }
        return false;
    }

    isKeyPressed(keyName){
        if (this.keyPressed[this.keyPressed.indexOf(keyName)]){
            return true;
        }
        return false;
    }

    keyDownHandler(event) {
        if (!this.isKeyPressed(event.code)){
            this.keyDown.push(event.code);
            this.keyPressed.push(event.code);
        }
    }

    keyUpHandler(event) {
        this.keyUp.push(event.code);
        if(this.isKeyPressed(event.code)){
            this.keyPressed.splice(this.keyPressed.indexOf(event.code),1);
        }
    }

    mouseDownHandler(event) {
        if (!this.isKeyPressed("mouse"+event.button)){
            this.keyDown.push("mouse"+event.button);
            this.keyPressed.push("mouse"+event.button);
        }
    }

    mouseUpHandler(event) {
        this.keyUp.push("mouse"+event.button);
        if(this.isKeyPressed("mouse"+event.button)){
            this.keyPressed.splice(this.keyPressed.indexOf("mouse"+event.button),1);
        }
    }

}
const input = new Input();