"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fighter = void 0;
const Spacecraft_1 = require("./Spacecraft");
class Fighter extends Spacecraft_1.SpaceCraft {
    weaponPower;
    constructor(name, power) {
        super(name);
        this.weaponPower = power;
    }
    atack(target) {
        if (target.isOperational()) {
            const damage = this.weaponPower >= 50 ? 30 : this.weaponPower >= 30 ? 20 : 10;
            target.takeDamage(damage);
            console.log(`${this.name}`);
            return damage;
        }
        else {
            return 0;
        }
    }
    showStatus() {
    }
}
exports.Fighter = Fighter;
