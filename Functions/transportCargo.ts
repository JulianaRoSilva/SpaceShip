import { CargoCarrier } from "../Interfaces/CargoCarrier";

export function transportCargo(ship: CargoCarrier, amount: number): void {
    ship.loadCargo(amount)
}