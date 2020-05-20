
// random letters code

function makeLetters(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    // return result;
    document.querySelector(".js-1").innerHTML = result;
}

function makeNumbers(length) {
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    document.querySelector(".js-2").innerHTML = result;
}

function makeDash() {
    document.querySelector(".dash").innerHTML = "-";
}

function makePlate() {
    makeLetters(3);
    makeDash();
    makeNumbers(3);

}

// vanity plate code
function customPlate() {

    document.querySelector(".js-1").innerHTML = "";

    document.querySelector(".js-2").innerHTML = "";

    document.querySelector(".dash").innerHTML = "";

    document.querySelector(".js-1").innerHTML = document.querySelector(".field").value;
}



// change background code
var count = 0;

const myPlate = ["/images/palmtree-plate.PNG", "/images/resonate-plate.PNG", "images/paw-plate.PNG", "images/location-plate.PNG", "images/flower-plate.PNG", "images/camera-plate.PNG"]

document.querySelector(".plate-img").src = `${myPlate[count]}`;

function incrementByOne() {

    if (count == 5) {
        count = 0;
    } else {
        count++;
    };

    document.querySelector(".plate-img").src = myPlate[count];

}
