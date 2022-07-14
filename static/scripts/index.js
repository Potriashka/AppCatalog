let latestAppsContanier = document.getElementById("latestApps");

firebase.database().ref("/").on("value", (snapshot) => {
    if (snapshot.val()) {
        let latestApps = "";
        for (let username in snapshot.val()["user"]) {
            const publisherName = snapshot.val()["user"][username]["Name"]
            const apps = snapshot.val()["user"][username]["apps"]
            let latestAppNames = [];
            for (const app in apps) {
                latestAppNames.push(app);
            }
            latestApps += `<h4><a href="/publisher/${publisherName}" class="b">${publisherName}</a></h4>`;
            for (const name of latestAppNames) {
                latestApps += `<a href="/publisher/${publisherName}/${name}" class="b">${name}</a><br>`;
            }
        }
        latestAppsContanier.innerHTML = latestApps;
    } else {
        latestAppsContanier.innerHTML = "<h2>There are no publishers yet</h2>"
    }
});
