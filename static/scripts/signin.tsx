function signin() {
    document.getElementById("buttonSignIn").innerHTML = "<i class=\"fa fa-spinner fa-spin\"></i> Sign In";
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "" || password == "") {
        alert("You must fill in all input fields!")
    } else {
        firebase.database().ref("/user/" + username).on("value", function(snapshot) {
            if (snapshot.val() == undefined) {
                alert("Username or password is incorrect. Try again");
            } else {
                if (snapshot.val()["Password"] == password) {
                    setCookie("username", username, 100);
                    setCookie("name", snapshot.val()["Name"], 100);
                    window.location.replace("/");
                }
            }
        });
    }
}
