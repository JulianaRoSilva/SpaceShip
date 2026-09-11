import { CombatCanable } from "../Interfaces/CombatCapable";
import { Repairable } from "../Interfaces/Repairable";
import { red } from "../Support/Colors";
import { clear, stop } from "../Support/stop";
import { SpaceCraft } from "./SpaceCraft";

export class Fighter extends SpaceCraft implements CombatCanable, Repairable {

    private weaponPower: number;

    constructor(name: string, power: number) {
        super(name);
        this.weaponPower = power;
    }

    public repair(): void {
        this.health = 100;
    }

    atack(target: SpaceCraft): number {
        if (target.isOperational()) {
            clear()
            const damage = this.weaponPower >= 50 ? 30 : this.weaponPower >= 30 ? 20 : 10

            target.takeDamage(damage);
            console.log(`The ship ${this.name} dealt ${damage} damage in ${target.getName()}!`)
            stop()
            return damage

        } else {
            red(`${target} inst operational!`)
            return 0
        }
    }

    showStatus(): void {

    }

}