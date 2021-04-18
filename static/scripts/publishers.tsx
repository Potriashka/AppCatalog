let publisherContainer = document.getElementById("publishers");

firebase.database().ref("/").on("value", (snapshot) => {
    if (snapshot.val()) {
        let publishers = "";
        for (let username in snapshot.val()["user"]) {
            let publisherName = snapshot.val()["user"][username]["Name"]
            publishers += `<a href="/publisher/${publisherName}" class="b">${publisherName}</a><br>`;
        }
        publisherContainer.innerHTML = publishers;
    } else {
        publisherContainer.innerHTML = "<h2>There are no publishers yet</h2>"
    }
});