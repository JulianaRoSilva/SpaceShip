"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleShip = void 0;
const SpaceCraft_1 = require("./SpaceCraft");
const Planets_1 = require("../Support/Planets");
const Colors_1 = require("../Support/Colors");
const stop_1 = require("../Support/stop");
class MultipleShip extends SpaceCraft_1.SpaceCraft {
    CargoMax = 30; // capacidade maxima reduzida por ser multipla
    CurrentCargo = 0;
    weaponPower;
    constructor(name, power) {
        super(name);
        this.weaponPower = power;
    }
    loadCargo(amount) {
        if (this.CurrentCargo + amount <= this.CargoMax) {
            this.CurrentCargo += amount;
        }
    }
    unloadCargo(amount) {
        this.CurrentCargo - amount <= 0 ? 0 : this.CurrentCargo -= amount;
    }
    getCargoCapacity() {
        return this.CargoMax;
    }
    getCurrentCargo() {
        return this.CurrentCargo;
    }
    // EXPLORATY
    collectData() {
        return 'The scientific data were collected.';
    }
    explore(location) {
        if (this.getfuel() >= 10) {
            switch (location) {
                case Planets_1.Planets.MERCURY:
                    (0, stop_1.clear)();
                    (0, Planets_1.mercury)();
                    (0, stop_1.stop)();
                    (0, stop_1.clear)();
                    (0, Colors_1.purple)(this.collectData());
                    this.setFuel(-10); // usar combustível na jornada
                    (0, stop_1.stop)();
                    break;
                case Planets_1.Planets.VENUS:
                    (0, stop_1.clear)();
                    (0, Planets_1.venus)();
                    (0, stop_1.stop)();
                    (0, stop_1.clear)();
                    (0, Colors_1.purple)(this.collectData());
                    this.setFuel(-10);
                    (0, stop_1.stop)();
                    break;
                case Planets_1.Planets.EARTH:
                    (0, stop_1.clear)();
                    (0, Planets_1.earth)();
                    (0, stop_1.stop)();
                    (0, stop_1.clear)();
                    (0, Colors_1.purple)(this.collectData());
                    this.setFuel(-10);
                    (0, stop_1.stop)();
                    break;
                default:
                    (0, stop_1.clear)();
                    (0, Colors_1.red)('Imput a valid option!');
                    (0, stop_1.stop)();
                    break;
            }
        }
        else {
            (0, Colors_1.red)('You do not have enough fuel for the journey!');
            (0, stop_1.stop)();
        }
    }
    showStatus() {
    }
    // damage
    atack(target) {
        if (target.isOperational()) {
            const damage = this.weaponPower >= 30 ? 15 : this.weaponPower >= 20 ? 10 : 5;
            console.log(`The ship ${this.name} dealt ${damage} damage in ${target.getName()}!`);
            (0, stop_1.stop)();
            target.takeDamage(damage);
            return damage;
        }
        else {
            return 0;
        }
    }
}
exports.MultipleShip = MultipleShip;
