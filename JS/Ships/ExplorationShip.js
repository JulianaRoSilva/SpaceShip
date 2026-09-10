"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplorationShip = void 0;
const Spacecraft_1 = require("./Spacecraft");
class ExplorationShip extends Spacecraft_1.SpaceCraft {
    explore(location) {
        return 'a';
    }
    collectData() {
        return 'a';
    }
    showStatus() {
    }
}
exports.ExplorationShip = ExplorationShip;
