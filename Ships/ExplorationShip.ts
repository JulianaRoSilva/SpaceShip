import { Exploraty } from "../Interfaces/Exploraty";
import { Planets } from "./Planets";
import { SpaceCraft } from "./Spacecraft";

export class ExplorationShip extends SpaceCraft implements Exploraty {


    explore(location: Planets): string {
        return 'a'
    }

    collectData(): string {
        return 'a'
    }

    public showStatus(): void {
        
    }


}