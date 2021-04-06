let username = window.sessionStorage.getItem("username");
if (username == null) {
    window.location.replace("/");
}
document.getElementById("usernameSpan").innerText = username;
let publisherName = window.sessionStorage.getItem("name");
document.getElementById("nameSpan").innerText = publisherName;

function signout() {
    window.sessionStorage.clear();
    window.location.replace("/");
}
