let username = getCookie("username");
if (!checkCookie(username)) {
    window.location.replace("/");
}
document.getElementById("usernameSpan").innerText = username;
let publisherName = getCookie("name");
document.getElementById("nameSpan").innerText = publisherName;

function signout() {
    setCookie("username", "", 100);
    setCookie("name", "", 100);
    window.location.replace("/");
}
