const arr = ["images/carousel_2.jpg", "images/carousel_3.jpg", "images/carousel_1.jpg"];
const link = ["Home", "Career", "Skills", "Contact"];
let counter = 0;
window.onload = function () {
    setInterval(function () { getImage() }, 5000);
    addFooter();
}

function getImage() {
    if (counter === arr.length) counter = 0;
    let newImage = document.getElementById('abc');
    newImage.src = arr[counter];
    counter++;
}

function addFooter() {
    let footer = document.getElementById('footer');
    for (let i = 0; i <= link.length - 1; i++) {
        let newLink = document.createElement("a");
        newLink.href = "#" + link[i].toLowerCase();
        var newContent = document.createTextNode(link[i]);
        newLink.appendChild(newContent);
        footer.appendChild(newLink);
    }
}
function getCareer() {
    console.log("career");
}
function getSkills() {
    console.log("skills");
}
function getContact() {
    console.log("contact");
}

function locationHashChanged() {
    let url = window.location.href;
    if (url.indexOf('home') === 78) {
         getImage();
    } else if (url.indexOf('career') === 78) {
         getCareer();
    } else if (url.indexOf('skills') === 78) {
         getSkills();
    } else {
         getContact();
    }
}

window.addEventListener('hashchange', locationHashChanged);




