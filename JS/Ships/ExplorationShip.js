"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplorationShip = void 0;
const Planets_1 = require("../Support/Planets");
const SpaceCraft_1 = require("./SpaceCraft");
const Colors_1 = require("../Support/Colors");
const stop_1 = require("../Support/stop");
class ExplorationShip extends SpaceCraft_1.SpaceCraft {
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
                case Planets_1.Planets.MARS:
                    (0, stop_1.clear)();
                    (0, Planets_1.mars)();
                    (0, stop_1.stop)();
                    (0, stop_1.clear)();
                    (0, Colors_1.purple)(this.collectData());
                    this.setFuel(-10);
                    (0, stop_1.stop)();
                    break;
                case Planets_1.Planets.JUPITER:
                    (0, stop_1.clear)();
                    (0, Planets_1.jupiter)();
                    (0, stop_1.stop)();
                    (0, stop_1.clear)();
                    (0, Colors_1.purple)(this.collectData());
                    this.setFuel(-10);
                    (0, stop_1.stop)();
                    break;
                case Planets_1.Planets.SATURN:
                    (0, stop_1.clear)();
                    (0, Planets_1.saturn)();
                    (0, stop_1.stop)();
                    (0, stop_1.clear)();
                    (0, Colors_1.purple)(this.collectData());
                    this.setFuel(-10);
                    (0, stop_1.stop)();
                    break;
                case Planets_1.Planets.URANUS:
                    (0, stop_1.clear)();
                    (0, Planets_1.uranus)();
                    (0, stop_1.stop)();
                    (0, stop_1.clear)();
                    (0, Colors_1.purple)(this.collectData());
                    this.setFuel(-10);
                    (0, stop_1.stop)();
                    break;
                case Planets_1.Planets.NEPTUNE:
                    (0, stop_1.clear)();
                    (0, Planets_1.neptune)();
                    (0, stop_1.stop)();
                    (0, stop_1.clear)();
                    (0, Colors_1.purple)(this.collectData());
                    this.setFuel(-10);
                    (0, stop_1.stop)();
                    break;
                case Planets_1.Planets.PLUTO:
                    (0, stop_1.clear)();
                    (0, Planets_1.pluto)();
                    (0, stop_1.stop)();
                    (0, stop_1.clear)();
                    (0, Colors_1.purple)(this.collectData());
                    this.setFuel(-10);
                    (0, stop_1.stop)();
                    break;
                case Planets_1.Planets.SEDNA:
                    (0, stop_1.clear)();
                    (0, Planets_1.sedna)();
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
}
exports.ExplorationShip = ExplorationShip;
