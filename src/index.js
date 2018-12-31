const arr = ["images/carousel_1.jpg", "images/carousel_2.jpg", "images/carousel_3.jpg", "images/hero.jpg"];
let counter = 0;
window.onload = function () {
    setInterval(function () { getImage() }, 3000);
}

function getImage() {
    if (counter === arr.length ) counter = 0;
    let newImage = document.getElementById('abc');
    newImage.src = arr[counter];
    counter++;
}

