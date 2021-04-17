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
