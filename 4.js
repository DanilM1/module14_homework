function Electronics(work, weight, height, made, ampere) {
    this.work = work; // on or off
    this.weight = weight; // kg
    this.height = height; // mm
    this.made = made; // country
    this.ampere = ampere; // 0.00
}

Electronics.prototype.working = function() {console.log("Now this device is " + this.work);}
Electronics.prototype.power = function() {return this.ampere * 220;} // theory

Laptop.prototype = new Electronics();

function Laptop(work, weight, height, made, ampere, keyboard, display) {
    this.work = work; // on or off
    this.weight = weight; // kg
    this.height = height; // mm
    this.made = made; // country
    this.ampere = ampere; // 0.00
    this.keyboard = keyboard; // yes or no
    this.display = display; // small or large
}

Laptop.prototype.watching = function() {console.log("This display is really " + this.display)};

Mixer.prototype = new Electronics();

function Mixer(work, weight, height, made, ampere, speed, brand, bluetooth) {
    this.work = work; // on or off
    this.weight = weight; // kg
    this.height = height; // mm
    this.made = made; // country
    this.ampere = ampere; // 0.00
    this.speed = speed;
    this.brand = brand; // no name
    this.bluetooth = bluetooth; // yes or no
}

Mixer.prototype.option = function() {
    if (this.bluetooth === "yes") console.log("Nice");
    else console.log("You have great Wi-Fi");
};

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