"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fighter = void 0;
const Colors_1 = require("../Support/Colors");
const stop_1 = require("../Support/stop");
const SpaceCraft_1 = require("./SpaceCraft");
class Fighter extends SpaceCraft_1.SpaceCraft {
    weaponPower;
    constructor(name, power) {
        super(name);
        this.weaponPower = power;
    }
    repair() {
        this.health = 100;
    }
    atack(target) {
        if (target.isOperational()) {
            (0, stop_1.clear)();
            const damage = this.weaponPower >= 50 ? 30 : this.weaponPower >= 30 ? 20 : 10;
            target.takeDamage(damage);
            console.log(`The ship ${this.name} dealt ${damage} damage in ${target.getName()}!`);
            (0, stop_1.stop)();
            return damage;
        }
        else {
            (0, Colors_1.red)(`${target} inst operational!`);
            return 0;
        }
    }
    showStatus() {
    }
}
exports.Fighter = Fighter;
