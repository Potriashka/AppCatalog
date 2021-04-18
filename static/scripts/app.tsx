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
        // app["appType"] for type
        // app["imageUrl"] for image link
        // app["source"] for link to the source code
    }
});