check = () => {
    if (!checkCookie("username")) {
        alert("You are not signed in!");
        openSignInDialog();
    }
}

window.onload = check;

let add = () => {
    check();
}
