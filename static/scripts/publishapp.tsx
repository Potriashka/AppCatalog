let publishButton = document.getElementById("publishButton");
let publisherName;

let check = () => {
    publisherName = getCookie("name");
    if (!checkCookie("username")) {
        publishButton.innerHTML = "Publish";
        alert("You are not signed in!");
        openSignInDialog();
    }
}

window.onload = check;

async function publish() {
    check();

    publishButton.innerHTML = "<i class=\"fa fa-spinner fa-spin\"></i> Publish";

    const ref = firebase.storage().ref();

    let appName = document.getElementById("nameOfApp").value;
    let description = document.getElementById("description").value;
    let appType = selected.innerText;
    let link = document.getElementById("link").value;
    let source = document.getElementById("source").value;

    const file = document.getElementById("icon").files[0];

    const name = "/" + appName + "-" + getCookie("username") + "-icon";

    const metadata = {
        contentType: file.type
    }

    const task = ref.child(name).put(file, metadata);

    task.then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            firebase.database().ref("/user/" + getCookie("username") + "/apps/" + appName).set({
                appName: appName,
                description: description,
                appType: appType,
                link: link,
                source: source,
                imageUrl: url
            });
        });

    publishButton.innerHTML = "Publish";
    publishButton.style.display = "none";
    window.location.replace("/publisher/" + publisherName + "/" + appName);
}

let otherButton = document.getElementById("other");
let otherInput = document.getElementById("otherInput");

otherButton.onclick = () => {
    otherButton.style.display = "none";
    otherInput.style.display = "block";
    otherInput.focus();
}

let webButton = document.getElementById("webButton");
let mobileButton = document.getElementById("mobileButton");
let gameButton = document.getElementById("gameButton");
let cliButton = document.getElementById("cliButton");
let packageButton = document.getElementById("packageButton");

const typeButtons = [webButton, mobileButton, gameButton, cliButton, packageButton];

let selected;

let select = (button) => {
    if (selected) {
        selected.style.setProperty("background", "none", "important");
        selected.style.setProperty("color", "lightgray", "important");
    }
    button.style.setProperty("background-color", "#58eac3", "important");
    button.style.setProperty("color", "black", "important");
    selected = button;
}

typeButtons.forEach((button) => {
    button.onclick = function () {
        select(button);
    }
});

document.onkeydown = (e) => {
    if (!e) e = window.event;
    let keyCode = e.code || e.key;
    if (keyCode === "Enter") {
        if (otherInput.style.display === "block") {
            otherButton.innerHTML = otherInput.value;
            otherInput.style.display = "none";
            otherButton.style.display = "block";
            select(otherButton);
        }
    }
}

var input = document.getElementById('icon');
var preview = document.querySelector('.preview');

input.style.opacity = 0;
input.addEventListener('change', updateImageDisplay);
function updateImageDisplay() {
    while(preview.firstChild) {
        preview.removeChild(preview.firstChild);
    }

    var curFiles = input.files;
    if(curFiles.length === 0) {
        var para = document.createElement('p');
        para.textContent = 'No files currently selected for upload';
        preview.appendChild(para);
    } else {
        var list = document.createElement('ol');
        preview.appendChild(list);
        for(var i = 0; i < curFiles.length; i++) {
            var listItem = document.createElement('li');
            var para = document.createElement('p');
            if(validFileType(curFiles[i])) {
                para.textContent = 'File name: ' + curFiles[i].name + ', file size ' + returnFileSize(curFiles[i].size) + '.';
                var image = document.createElement('img');
                image.src = window.URL.createObjectURL(curFiles[i]);

                let div = document.getElementById("uploadThingy")
                div.style.display = "none";

                listItem.appendChild(image);
                listItem.appendChild(para);

            } else {
                para.textContent = 'File name ' + curFiles[i].name + ': Not a valid file type. Update your selection.';
                listItem.appendChild(para);
            }

            list.appendChild(listItem);
        }
    }
}
var fileTypes = [
    'image/jpeg',
    'image/pjpeg',
    'image/png'
]

function validFileType(file) {
    for(var i = 0; i < fileTypes.length; i++) {
        if(file.type === fileTypes[i]) {
            return true;
        }
    }

    return false;
}
function returnFileSize(number) {
    if(number < 1024) {
        return number + 'bytes';
    } else if(number > 1024 && number < 1048576) {
        return (number/1024).toFixed(1) + 'KB';
    } else if(number > 1048576) {
        return (number/1048576).toFixed(1) + 'MB';
    }
}

