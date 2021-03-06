let register = () => {
    if (checkCookie("username")) {
        alert("You are already registered!");
        window.location.replace("/");
    }
    let button = document.getElementById("buttonRegister");
    button.innerHTML = "<i class=\"fa fa-spinner fa-spin\"></i> Register";
    let done = false;
    let username = document.getElementById("usernameRegister").value;
    let name = document.getElementById("name").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let checkbox = document.getElementById("checkboxReg");
    if (username !== "" || name != "" || password1 != "" || password2 != "") {
        if (password1 === password2) {
            if (checkbox.checked) {
                firebase.database().ref("/").on("value", function (snapshot) {
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
                            button.innerHTML = "Register";
                            closeDialog();
                            organizeButtons();
                            return;
                        } else {
                            if (!done) {
                                button.innerHTML = "Register";
                                alert("A user with that username already exists! Try a different username.")
                                document.getElementById("username").value = "";
                            }
                        }
                    }
                });
            } else {
                button.innerHTML = "Register";
                alert("You haven't accepted cookies! Please, try again.");
            }
        } else {
            button.innerHTML = "Register";
            alert("Passwords do not match! Please, try again.");
        }
    } else {
        button.innerHTML = "Register";
        alert("You should fill in all input fields!");
    }
}
