function register() {
    let done = false;
    let username = document.getElementById("username").value;
    let name = document.getElementById("name").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    if (username !== "" || name != "" || password1 != "" || password2 != "") {
        if (password1 === password2) {
            firebase.database().ref("/").on("value", function(snapshot) {
                if (snapshot.val()) {
                    if (snapshot.val()["user"][username] == undefined) {
                        done = true;
                        firebase.database().ref("/user/" + username).set({
                            Username: username,
                            Name: name,
                            Password: password1
                        });
                        setCookie("username", username, 100);
                        setCookie("name", name, 100);
                        window.location.replace("/");
                        return;
                    } else {
                        if (!done) {
                            alert("A user with that username already exists! Try a different username.")
                            document.getElementById("username").value = "";
                        }
                    }
                }
            });
        } else {
            alert("Passwords do not match! Please, try again.");
        }
    } else {
        alert("You should fill in all input fields!");
    }
}
