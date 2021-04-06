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

function signin() {
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
                    window.sessionStorage.setItem("username", username);
                    window.sessionStorage.setItem("name", snapshot.val()["Name"]);
                    window.location.replace("/");
                }
            }
        });
    }
}
