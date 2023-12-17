(function(){
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for(var index in dropdowns){
        dropdowns[index].style.display = "none";
    }
})();

function dropdownAnim(buttonId) {
    let dropdown = document.getElementById(buttonId+"-content");
    let button = document.getElementById(buttonId);

    if (dropdown.style.display != "none"){
        dropdown.style.display = "none";
        button.style.rotate = "0deg";
    } 
    else{
        dropdown.style.display = "block";
        button.style.rotate = "180deg";
    }
}