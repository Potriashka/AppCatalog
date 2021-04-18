let publisherContainer = document.getElementById("appName1");

firebase.database().ref("/publisher/").on("value", (snapshot) => {
    if (snapshot.val()) {
        let appName = "";
        for (let username in snapshot.val()["user"]) {
            let appName = snapshot.val()["user"][username]["Name"]
            publishers += `<a href="/publisher/${appName}" class="b">${appName}</a><br>`;
        }
        publisherContainer.innerHTML = appName;
    } else {
        publisherContainer.innerHTML = "<h2>Can't find it</h2>"
    }
});