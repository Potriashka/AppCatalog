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

function set() {
    // getting the input by the id
    let input = document.getElementById("set_name");
    let id_input = document.getElementById("set_id");
    // getting the value of the input
    let name = input.value;
    let id = id_input.value;
    // setting the value
    firebase.database().ref("/user/"+id).set({
        Name: name,
        Id: id
    });
}


function update() {
    // getting the input by the id
    let input = document.getElementById("update_name");
    let id_input = document.getElementById("update_id");
    // getting the value of the input
    let name = input.value;
    let id = id_input.value;
    // setting the value
    firebase.database().ref("/user/"+id).update({
        Name: name,
        Id: id
    });
}

