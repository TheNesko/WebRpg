(function(){
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for(var index in dropdowns){
        dropdowns[index].style.display="none";
    }
})();

function dropdownAnim(page,buttonId) {
    let pageContent = document.getElementsByClassName("content "+page+"-page")[0];
    let dropdownContainers = pageContent.getElementsByClassName("dropdown");
    let button;
    for(let index in dropdownContainers){
        button = dropdownContainers[index].firstElementChild;
        if(button.id == buttonId){
            break;
        }
    }
    let dropdown = button.parentElement.getElementsByClassName("dropdown-content")[0];

    if (dropdown.style.display != "none"){
        dropdown.style.display = "none";
        button.style.rotate = "0deg";
    } 
    else{
        dropdown.style.display = "block";
        button.style.rotate = "180deg";
    }
}