"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceCraft = void 0;
class SpaceCraft {
    id = 0;
    name;
    fuel = 100;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getfuel() {
        return this.fuel;
    }
    gethealth() {
        return this.health;
    }
    setFuel(val) {
        this.fuel -= val;
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
    isOperational() {
        return this.health > 0 && this.fuel > 0 ? true : false; // ternário para retornar true ou false
    }
}
exports.SpaceCraft = SpaceCraft;
