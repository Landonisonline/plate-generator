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




// const myPlate[counter] = ["/images/palmtree-plate.PNG", "/images/resonate-plate.PNG",
//         "/images/blank-plate.PNG"];

//     document.querySelector(".plate-img").src = `${myPlate[counter]}`;

//     if (counter !== 4) {
//         counter = counter + 1;
//     } else {
//         counter = 0;
//     }