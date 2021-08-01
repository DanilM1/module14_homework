const electronics = new Object({
    work: "yes", // on or off
    weight: 1.23, // kg
    height: 710, // mm
    made: "USSR", // country
    ampere: 380 // but this is need
});

const a = "made";
const b = "power";

function own(device, str) {
    for (let j in device) {
        if (j === str) return true;
        else return false;
    }
}

own(electronics, a);
own(electronics, b);