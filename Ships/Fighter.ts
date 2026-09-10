import { CombatCanable } from "../Interfaces/CombatCapable";
import { SpaceCraft } from "./Spacecraft";

export class Fighter extends SpaceCraft implements CombatCanable {

    private weaponPower: number;

    constructor(name: string, power: number) {
        super(name);
        this.weaponPower = power;
    }


    atack(target: SpaceCraft): number {
        if (target.isOperational()) {
            const damage = this.weaponPower >= 50 ? 30 : this.weaponPower >= 30 ? 20 : 10

            target.takeDamage(damage);
            console.log(`${this.name}`)
            return damage

        } else {
            return 0
        }
    }

    showStatus(): void {

    }

}