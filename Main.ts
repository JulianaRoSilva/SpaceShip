import { ExplorationShip } from "./Ships/ExplorationShip";
import { SpaceCraft } from "./Ships/Spacecraft";
import { earth, Planets, sedna, venus } from "./Support/Planets";
import { mercury } from "./Support/Planets";


const a: ExplorationShip = new ExplorationShip('Jupita')


a.explore(Planets.MERCURY);