const electronics = new Object({
    work: "yes", // on or off
    weight: 1.23, // kg
    height: 710, // mm
    made: "USSR", // country
    ampere: 380 // but this is need
});

let mixer = Object.create(electronics);

mixer.power = 100500;
mixer.color = "red";

function ownOptions(device) {
    for (let j in device) {
        if (device.hasOwnProperty(j)) console.log(j + " - " + device[j]);
    }
}

ownOptions(mixer);