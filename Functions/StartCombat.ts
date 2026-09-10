import { CombatCanable } from "../Interfaces/CombatCapable";
import { SpaceCraft } from "../Ships/Spacecraft";

export function startCombat(ship: CombatCanable, target: SpaceCraft): void {
    ship.atack(target);
}