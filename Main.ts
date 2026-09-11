import { performExploration } from "./Functions/performExploration";
import { startCombat } from "./Functions/StartCombat";
import { CargoCarrier } from "./Interfaces/CargoCarrier";
import { CombatCanable } from "./Interfaces/CombatCapable";
import { ExplorationShip } from "./Ships/ExplorationShip";
import { Fighter } from "./Ships/FighterShip";
import { MultipleShip } from "./Ships/MultipleShips";
import { TransportShip } from "./Ships/TransportShip";
import { earth, Planets} from "./Support/Planets";



const fighter = new Fighter('Nave atacante', 100);
const transportShip = new TransportShip('Nave transportadora');
const explorationShip = new ExplorationShip('Classe exploradora');
const multiPurposeShip = new MultipleShip('Nave multipla', 100);

startCombat(multiPurposeShip, explorationShip);
performExploration(explorationShip, Planets.EARTH);

const combatShips: CombatCanable[] = [];
const explorationShips: ExplorationShip[] = [];
const cargoShips: CargoCarrier[] = [];

combatShips.push(fighter);
combatShips.push(multiPurposeShip);

combatShips.push(multiPurposeShip);
explorationShips.push(multiPurposeShip);
cargoShips.push(multiPurposeShip);