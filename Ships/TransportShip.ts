import { CargoCarrier } from "../Interfaces/CargoCarrier";
import { SpaceCraft } from "./SpaceCraft";

export class TransportShip extends SpaceCraft implements CargoCarrier {

    private CargoMax: number = 50;
    private CurrentCargo: number = 0;

    loadCargo(amount: number): void {
        if (this.CurrentCargo + amount <= this.CargoMax) {
            this.CurrentCargo += amount;
        }
    }

    unloadCargo(amount: number): void {
        this.CurrentCargo - amount <= 0 ? 0 : this.CurrentCargo -= amount
    }

    getCargoCapacity(): number {
        return this.CargoMax
    }

    getCurrentCargo(): number {
        return this.CurrentCargo
    }

    public showStatus(): void {
        console.log()
    }


}