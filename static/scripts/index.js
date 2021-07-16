let latestAppsContanier = document.getElementById("latestApps");

firebase.database().ref("/").on("value", (snapshot) => {
    if (snapshot.val()) {
        let latestApps = "";
        for (let username in snapshot.val()["user"]) {
            let publisherName = snapshot.val()["user"][username]["Name"]
            let latestAppsNames = snapshot.val()["user"][username]["apps"][["appName"]
            latestApps += `<a href="/publisher/${publisherName}" class="b">${publisherName}</a><br>`;
        }
        latestAppsContanier.innerHTML = latestApps;
    } else {
        latestAppsContanier.innerHTML = "<h2>There are no publishers yet</h2>"
    }
});