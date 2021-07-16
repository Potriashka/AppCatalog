let name = document.getElementById("publisherName").innerText;
let app;
let found = false;

firebase.database().ref("/user/").on("value", (snapshot) => {
    for(const [key, val] of Object.entries(snapshot.val())) {
        if (val["Name"] == name) {
            found = true;
            app = val["apps"][document.getElementById("nameOfApp").innerText];
            break;
        }
    }
    if (!found) {
        alert("This app does not exist!");
    } else {
        document.getElementById("icon").src = app["imageUrl"];
        document.getElementById("description").innerHTML += app["description"];
        document.getElementById("type").innerHTML += app["appType"];
        document.getElementById("link").innerHTML += `<a href="${app["link"]}" class="b">${app["link"]}</a>`;
        document.getElementById("source").innerHTML += `<a href="${app["source"]}" class="b">${app["source"]}</a>`;

        let recommended = app["recommended"];
        let verified = app["verified"]
        let byDevs = document.getElementById("jjjust");
        let tick = document.getElementById("verif");

        if (recommended == "no" || verified == "no") {
            // pass
        }
        if (recommended == "yes") {
            byDevs.innerText = `★ Recommended by the Developers Team`;
        }
        if (verified == "yes") {
            tick.innerText = `✓`;
        }
    }
});