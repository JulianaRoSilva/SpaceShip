"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportShip = void 0;
const Spacecraft_1 = require("./Spacecraft");
class TransportShip extends Spacecraft_1.SpaceCraft {
    CargoMax = 50;
    CurrentCargo = 0;
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
    showStatus() {
        console.log();
    }
}
exports.TransportShip = TransportShip;
