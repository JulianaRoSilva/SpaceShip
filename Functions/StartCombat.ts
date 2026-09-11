import { CombatCanable } from "../Interfaces/CombatCapable";
import { SpaceCraft } from "../Ships/SpaceCraft";

export function startCombat(ship: CombatCanable, target: SpaceCraft): void {
    ship.atack(target);
}