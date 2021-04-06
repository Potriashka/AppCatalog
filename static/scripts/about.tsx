var firebaseConfig = {
    apiKey: "AIzaSyCILHhUb6UyKgCNDp1Gbav5Y4HwaDMZvWM",
    authDomain: "appcatalog-6662e.firebaseapp.com",
    projectId: "appcatalog-6662e",
    storageBucket: "appcatalog-6662e.appspot.com",
    messagingSenderId: "966730374376",
    appId: "1:966730374376:web:eaa3204befa2cbae5ffd5d",
    measurementId: "G-6N1E3265JP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


function test1() {
    // getting the input by the id
    let test = document.getElementById("test").value;
    // setting the value
    firebase.database().ref("/user/"+test).set({
        Name: test
    });
}
