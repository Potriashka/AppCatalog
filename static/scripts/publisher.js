let found = false;
let name = document.getElementById("publisherName").innerText;
let content = document.getElementById("contentDiv");
let apps;
let vers;

firebase.database().ref("/user/").on("value", (snapshot) => {
    console.log(snapshot.val());
    for (const [key, val] of Object.entries(snapshot.val())) {
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
        for (const [key, val] of Object.entries(apps)) {
            if (vers) {
                content.innerHTML += `<a href="/publisher/${name}/${val["appName"]}" class="b">${val["appName"]}</a><span class="text-muted">✓</span></span><br>`;
            }
            else {
                content.innerHTML += `<a href="/publisher/${name}/${val["appName"]}" class="b">${val["appName"]}</a></span><br>`;
            }
        }
    }