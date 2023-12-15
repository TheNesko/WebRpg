function dropdownAnim() {
    let dropdown = document.getElementById("content");
    let button = document.querySelector("#settings");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
        button.style.rotate = "180deg";
    } else {
        dropdown.style.display = "none";
        button.style.rotate = "0deg"
    }
  }