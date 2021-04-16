function test1() {
    // getting the input by the id
    let test = document.getElementById("test").value;
    // setting the value
    firebase.database().ref("/user/"+test).set({
        Name: test
    });
}
