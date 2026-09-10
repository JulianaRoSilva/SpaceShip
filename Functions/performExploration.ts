import { Exploraty } from "../Interfaces/Exploraty";
import { Planets } from "../Support/Planets";

export function performExploration(ship: Exploraty, location: Planets): void {
    ship.explore(location)
}