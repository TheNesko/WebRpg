function dropdownAnim(dropdownId, buttonId) {
    let dropdown = document.getElementById(dropdownId);
    let button = document.getElementById(buttonId);


    if (dropdown.style.display === "none"){

        dropdown.style.display = "block";
        button.style.rotate = "180deg";
    } 
    else{
        dropdown.style.display = "none";
        button.style.rotate = "0deg";
    }
}