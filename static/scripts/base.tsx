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

document.getElementById("appName").onclick = () => {
    window.location.replace("/");
}

let signinDialog = document.getElementById("signinDialog");
let registerDialog = document.getElementById("registerDialog");

let signinOpen = false;
let registerOpen = false;

document.getElementsByClassName("signinButton").onclick = () => {
    signinDialog.style.display = "block";
    if (registerOpen) {
        registerDialog.style.display = "none";
        registerOpen = false;
    }
    signinOpen = true;
}

document.getElementById("registerButton").onclick = () => {
    registerDialog.style.display = "block";
    if (signinOpen) {
        signinDialog.style.display = "none";
        signinOpen = false;
    }
    registerOpen = true;
}

let closeDialog = () => {
    if (signinOpen) {
        signinDialog.style.display = "none";
        signinOpen = false;
    }
    if (registerOpen) {
        registerDialog.style.display = "none";
        registerOpen = false;
    }
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
    return c != "";
}
