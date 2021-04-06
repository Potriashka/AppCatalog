var firebaseConfig = {
    apiKey: "AIzaSyCiu_etP0l4eqawwQvwKRlbmoRdGtMxrAM",
    authDomain: "fir-26084.firebaseapp.com",
    projectId: "fir-26084",
    storageBucket: "fir-26084.appspot.com",
    messagingSenderId: "500541767729",
    appId: "1:500541767729:web:c2ce6ae2f296c6db351510",
    measurementId: "G-ZWPSNE451F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function register() {
    let username = document.getElementById("username").value;
    let name = document.getElementById("name").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    if (password1 === password2) {
        firebase.database().ref("/user/" + username).on("value", function(snapshot) {
            if (!snapshot.val()) {
                firebase.database().ref("/user/" + username).set({
                    Username: username,
                    Name: name,
                    Password: password1
                });
            } else {
                alert("A user with that username already exists! Try a different username.")
                document.getElementById("username").value = "";
            }
        });
    } else {
        alert("Passwords do not match! Try again!");
    }
}
