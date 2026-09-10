"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExplorationShip_1 = require("./Ships/ExplorationShip");
const Planets_1 = require("./Support/Planets");
const a = new ExplorationShip_1.ExplorationShip('Jupita');
a.explore(Planets_1.Planets.MERCURY);
