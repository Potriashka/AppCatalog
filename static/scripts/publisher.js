let found = false;
let name = document.getElementById("publisherName").innerText;
let content = document.getElementById("contentDiv");
let apps;
let vers;
let publisherNameCookies = getCookie("name");
let bool = checkCookie("name");

// for debugging
console.log(bool);
console.log(bool.toString() == "false");

firebase.database().ref("/user/").on("value", (snapshot) => {
    console.log(snapshot.val());
    for(const [key, val] of Object.entries(snapshot.val())) {
        if (val["Name"] == name) {
            apps = val["apps"];
            vers = val["verified"];
            found = true;
            break;
        }
    }
    if (!found) {
        alert("This publisher does not exist!");
    } else {
        for(const [key, val] of Object.entries(apps)) {
            if (publisherNameCookies == name) {
                console.log("Everything's OK!", publisherNameCookies);
                if (vers) {
                    content.innerHTML += `<btn class="cross" type="button">✕</btn><a href="/publisher/${name}/${val["appName"]}" class="b"> ${val["appName"]}</a><span class="text-muted">✓</span></span><br>`;
                }
                else {
                    content.innerHTML += `<btn class="cross" type="button">✕</btn><a href="/publisher/${name}/${val["appName"]}" class="b"> ${val["appName"]}</a></span><br>`;
                }
            if (bool.toString() == "false") { // not "bool == false" because of debugging
                console.log("Nope!", publisherNameCookies);
                if (vers) {
                    content.innerHTML += `<a href="/publisher/${name}/${val["appName"]}" class="b">${val["appName"]}</a><span class="text-muted">✓</span></span><br>`;
                }
                else {
                    content.innerHTML += `<a href="/publisher/${name}/${val["appName"]}" class="b">${val["appName"]}</a></span><br>`;
                }
            }
            if (publisherNameCookies != name) {
                console.log("Nope!", publisherNameCookies);
                if (vers) {
                    content.innerHTML += `<a href="/publisher/${name}/${val["appName"]}" class="b">${val["appName"]}</a><span class="text-muted">✓</span></span><br>`;
                }
                else {
                    content.innerHTML += `<a href="/publisher/${name}/${val["appName"]}" class="b">${val["appName"]}</a></span><br>`;
                }
            }
            }
        }
    }
});

let appName = // somehow need to find the name of the app, where the cross is ¯\_(ツ)_/¯

// this part doesn't work at all for some reason
document.getElementsByClassName("cross").onclick = () => {
    console.log("Pressed!"); // even this
    firebase.database().ref('/user/' + name + appName).remove();
}