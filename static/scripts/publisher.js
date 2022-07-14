let found_publisher = false;
let publisherName = document.getElementById("publisherName").innerText;
let content = document.getElementById("contentDiv");
let apps;
let vers;

firebase.database().ref("/user/").on("value", (snapshot) => {
    for (const [, val] of Object.entries(snapshot.val())) {
        if (val["Name"] == publisherName) {
            apps = val["apps"];
            vers = val["verified"];
            found_publisher = true;
            break;
        }
    }
    if (!found_publisher) {
        alert("This publisher does not exist!");
    } else {
        for (const [, val] of Object.entries(apps)) {
            if (vers) {
                content.innerHTML += `<a href="/publisher/${publisherName}/${val["appName"]}" class="b">${val["appName"]}</a><span class="text-muted">✓</span></span><br>`;
            } else {
                content.innerHTML += `<a href="/publisher/${publisherName}/${val["appName"]}" class="b">${val["appName"]}</a></span><br>`;
            }
        }
    }
});
