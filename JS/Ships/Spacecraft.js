"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceCraft = void 0;
class SpaceCraft {
    id = 0;
    name;
    fuel = 0;
    health;
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }
    refuel() {
        this.fuel = 100;
    }
    takeDamage(damage) {
        this.health - damage <= 0 ? this.health = 0 : this.health = -damage;
    }
    repair() {
        this.health = 100;
    }
}
exports.SpaceCraft = SpaceCraft;
