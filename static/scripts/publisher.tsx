let found = false;
let name = document.getElementById("publisherName").innerText;
let content = document.getElementById("contentDiv");
let apps;

firebase.database().ref("/user/").on("value", (snapshot) => {
    console.log(snapshot.val());
    for(const [key, val] of Object.entries(snapshot.val())) {
        console.log(val);
        if (val["Name"] == name) {
            apps = val["apps"];
            found = true;
            break;
        }
    }
    if (!found) {
        alert("This publisher does not exist!");
    } else {
        for(const [key, val] of Object.entries(apps)) {
            content.innerHTML += val["appName"] + "<br>";
        }
    }
});
