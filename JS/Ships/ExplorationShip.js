"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplorationShip = void 0;
const Planets_1 = require("./Planets");
const Spacecraft_1 = require("./Spacecraft");
const stop_1 = require("../stop");
class ExplorationShip extends Spacecraft_1.SpaceCraft {
    explore(location) {
        switch (location) {
            case Planets_1.Planets.MERCURIO:
                console.log(``);
                (0, stop_1.stop)();
                break;
            case Planets_1.Planets.VENUS:
                console.log(``);
                break;
            case Planets_1.Planets.TERRA:
                console.log(``);
                break;
            case Planets_1.Planets.MARTE:
                console.log(``);
                break;
            case Planets_1.Planets.JUPITER:
                console.log(``);
                break;
            case Planets_1.Planets.SATURNO:
                console.log(``);
                break;
            case Planets_1.Planets.URANO:
                console.log(``);
                break;
            case Planets_1.Planets.NETUNO:
                console.log(``);
                break;
            case Planets_1.Planets.PLUTAO:
                console.log(``);
                break;
            case Planets_1.Planets.SEDNA:
                console.log(``);
                break;
            default:
                break;
        }
    }
    collectData() {
        return 'a';
    }
    showStatus() {
    }
}
exports.ExplorationShip = ExplorationShip;
