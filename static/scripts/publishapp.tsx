window.onload = () => {
    if (!checkCookie("username")) {
        alert("You are not signed in!");
        openSignInDialog();
    }
}

let add = () => {

}

document.getElementById("publishButton").onclick = () => {
    window.location.replace("/");
}