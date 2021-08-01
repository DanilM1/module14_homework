class Electronics {
    constructor(work, weight, height, made, ampere) {
        this.work = work; // on or off
        this.weight = weight; // kg
        this.height = height; // mm
        this.made = made; // country
        this.ampere = ampere; // 0.00
    }

    working() {
        console.log("Now this device is " + this.work);
    }

    power() {
        return this.ampere * 220; // theory
    }
}

class Laptop extends Electronics {
    constructor(work, weight, height, made, ampere, keyboard, display) {
        super(work, weight, height, made, ampere);
        this.keyboard = keyboard; // yes or no
        this.display = display; // small or large
    }

    watching() {
        console.log("This display is really " + this.display);
    }
}

class Mixer extends Electronics {
    constructor(work, weight, height, made, ampere, speed, brand, bluetooth) {
        super(work, weight, height, made, ampere);
        this.speed = speed;
        this.brand = brand; // no name
        this.bluetooth = bluetooth; // yes or no
    }
    
    option() {
        if (this.bluetooth === "yes") console.log("Nice");
        else console.log("You have great Wi-Fi");
    }
}

let pc = new Laptop("on", 5.0, 300, "USA", 2.34, "no", "large");
let mixer = new Mixer("off", 0.7, 100, "Belarus", 0.07, 700, "Nike", "no");

pc.oc = "Linux";
console.log(pc.ampere);
console.log(pc.display);
console.log(pc.oc);
pc.watching();

mixer.year = 2021;
console.log(pc.made);
console.log(mixer.speed);
console.log(mixer.year);
mixer.option();