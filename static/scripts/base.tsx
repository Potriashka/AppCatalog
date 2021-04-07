let firebaseConfig = {
    apiKey: "AIzaSyCiu_etP0l4eqawwQvwKRlbmoRdGtMxrAM",
    authDomain: "fir-26084.firebaseapp.com",
    projectId: "fir-26084",
    storageBucket: "fir-26084.appspot.com",
    messagingSenderId: "500541767729",
    appId: "1:500541767729:web:c2ce6ae2f296c6db351510",
    measurementId: "G-ZWPSNE451F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let buttons = document.getElementById("buttons");
let account = document.getElementById("account");
let buttonsFooter = document.getElementsByClassName("buttonsFooter");
let accountFooter = document.getElementById("accountFooter");

if (!checkCookie("username")) {
    buttons.style.display = "inline";
    account.style.display = "none";

    for (let i = 0; i < buttonsFooter.length; i++)
        buttonsFooter[i].style.display = "inline";
    accountFooter.style.display = "none";
} else {
    buttons.style.display = "none";
    account.style.display = "inline";

    for (let i = 0; i < buttonsFooter.length; i++)
        buttonsFooter[i].style.display = "none";
    accountFooter.style.display = "inline";
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

document.getElementById("appName").onclick = () => {
    window.location.replace("/");
}

function setCookie(name, value, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
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

function checkCookie(cookie) {
    let c = getCookie(cookie);
    if (c != "") {
        return true;
    } else {
        return false;
    }
}
