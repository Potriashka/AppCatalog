let buttons = document.getElementById("buttons");
let account = document.getElementById("account");

if (window.sessionStorage.getItem("username") == null) {
    buttons.style.display = "block";
    account.style.display = "none";
} else {
    buttons.style.display = "none";
    account.style.display = "block";
}

document.getElementById("accountButton").onclick = () => {
    window.location.replace("/account");
}

document.getElementById("signinButton").onclick = () => {
    window.location.replace("/signin");
}

document.getElementById("registerButton").onclick = () => {
    window.location.replace("/register");
}

function setCookie(name, value, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        return true;
    } else {
        return false;
    }
}
