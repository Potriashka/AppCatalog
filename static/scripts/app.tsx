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
        let container = document.getElementById("appInfo");
        container.innerHTML = app["appName"];
        // app["appType"] for type
        // app["description"] for description
        // app["imageUrl"] for image link
        // app["link"] for link to the website
        // app["source"] for link to the source code
    }
});
