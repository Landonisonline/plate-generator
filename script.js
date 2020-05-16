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

function makePlate() {
    makeLetters(3);
    makeNumbers(3);
}

// unfinished

function nextPlate(index) {
    var myPlate[index] = ["/images/palmtree-plate.PNG", "/images/resonate-plate.PNG",
        "/images/blank-plate.PNG"];

    for (i = 0, i < 3, i++) {
        document.querySelector(".plate-img").innerHTML = `${myPlate[i]}`;
    }

}