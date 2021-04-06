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
