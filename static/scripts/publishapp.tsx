check = () => {
    if (!checkCookie("username")) {
        alert("You are not signed in!");
        openSignInDialog();
    }
}

window.onload = check;

let publish = () => {
    check();

    window.location.replace("/");
}

let otherButton = document.getElementById("other");
let otherInput = document.getElementById("otherInput");

otherButton.onclick = () => {
    otherButton.style.display = "none";
    otherInput.style.display = "block";
    otherInput.focus();
}

let webButton = document.getElementById("webButton");
let mobileButton = document.getElementById("mobileButton");
let gameButton = document.getElementById("gameButton");
let cliButton = document.getElementById("cliButton");
let packageButton = document.getElementById("packageButton");

const typeButtons = [webButton, mobileButton, gameButton, cliButton, packageButton];

let selected;

typeButtons.forEach((button) => {
    button.onclick = function() {
        if (selected) {
            selected.style.setProperty("background", "none", "important");
            selected.style.setProperty("color", "lightgray", "important");
        }
        button.style.setProperty("background-color", "#58eac3", "important");
        button.style.setProperty("color", "black", "important");
        selected = button;

    }
});

document.onkeydown = (e) => {
    if (!e) e = window.event;
    let keyCode = e.code || e.key;
    if (keyCode === "Enter") {
        if (otherInput.style.display === "block") {
            otherButton.innerHTML = otherInput.value;
            otherInput.style.display = "none";
            otherButton.style.display = "block";
            otherButton.style.setProperty("background-color", "#58eac3", "important");
            otherButton.style.setProperty("color", "black", "important");
            if (selected) {
                selected.style.setProperty("background", "none", "important");
                selected.style.setProperty("color", "lightgray", "important");
            }
            selected = otherButton;
        }
    }
}
