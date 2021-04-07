let container = document.getElementById("publishers");

firebase.database().ref("/").on("value", function(snapshot) {
    if (snapshot.val()) {
        for (let username in snapshot.val()["user"])
        {
            container.innerHTML += snapshot.val()["user"][username]["Name"] + "<br>";
        }
    } else {
        container.innerHTML = "<h2>There are no publishers yet</h2>"
    }
});
