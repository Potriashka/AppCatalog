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

let organizeButtons = () => {
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
}

organizeButtons();

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

let openSignInDialog = () => {
    signinDialog.style.display = "block";
    if (registerOpen) {
        registerDialog.style.display = "none";
        registerOpen = false;
    }
    signinOpen = true;
}

let openRegisterDialog = () => {
    registerDialog.style.display = "block";
    if (signinOpen) {
        signinDialog.style.display = "none";
        signinOpen = false;
    }
    registerOpen = true;
}

document.getElementById("signinButton").onclick = openSignInDialog;
document.getElementById("signinLink").onclick = openSignInDialog;
document.getElementById("registerButton").onclick = openRegisterDialog;
document.getElementById("registerLink").onclick = openRegisterDialog;

let closeDialog = async () => {
    let keyframe = [{ opacity: "0.2", left: "90vw" }]
    if (signinOpen) {
        signinDialog.animate(keyframe, { duration: 300, iterations: 1 })
        await new Promise(r => setTimeout(r, 300));
        signinDialog.style.display = "none";
        signinOpen = false;
    }
    if (registerOpen) {
        registerDialog.animate(keyframe, { duration: 300, iterations: 1 })
        await new Promise(r => setTimeout(r, 300));
        registerDialog.style.display = "none";
        registerOpen = false;
    }
}

document.getElementById("noAccount").onclick = () => {
    openRegisterDialog();
}

document.getElementById("alreadyAccount").onclick = () => {
    openSignInDialog();
}
