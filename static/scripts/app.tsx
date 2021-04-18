let name = document.getElementById("publisherName").innerText;
let app;
let img;
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
        let container = document.getElementById("appInfo");
        let descContainer = document.getElementById("description");
        let link = document.getElementById("link");
        let type = document.getElementById("type");
        let source = document.getElementById("source");
        container.innerHTML = app["appName"];
        descContainer.innerHTML = app["description"];
        link.innerHTML = app["link"];
        type.innerHTML = app["appType"];
        source.innerHTML = app["source"];
        let link2 = document.createElement("a");
        a.appendChild('https://' + link);
        // app["appType"] for type
        // app["imageUrl"] for image link
        // app["source"] for link to the source code
    }
});