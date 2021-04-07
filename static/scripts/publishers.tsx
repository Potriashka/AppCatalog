let container = document.getElementById("publishers");

firebase.database().ref("/").on("value", function(snapshot) {
    if (snapshot.val()) {
        let publishers = "";
        for (let username in snapshot.val()["user"])
        {
            publishers += `${snapshot.val()["user"][username]["Name"]}<br>`;
        }
        container.innerHTML = publishers;
    } else {
        container.innerHTML = "<h2>There are no publishers yet</h2>"
    }
});
