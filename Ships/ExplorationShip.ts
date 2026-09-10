import { Exploraty } from "../Interfaces/Exploraty";
import { Planets } from "./Planets";
import { SpaceCraft } from "./Spacecraft";
import { stop } from "../stop";

export class ExplorationShip extends SpaceCraft implements Exploraty {

    explore(location: Planets): void {
        switch(location) {

            case Planets.MERCURIO:
                console.log(``)
                stop()
                break;

            case Planets.VENUS:
                console.log(``)
                break;

            case Planets.TERRA:
                console.log(``)
                break;

            case Planets.MARTE:
                console.log(``)
                break;

            case Planets.JUPITER:
                console.log(``)
                break;

            case Planets.SATURNO:
                console.log(``)
                break;

            case Planets.URANO:
                console.log(``)
                break;

            case Planets.NETUNO:
                console.log(``)
                break;

            case Planets.PLUTAO:
                console.log(``)
                break;

            case Planets.SEDNA:
                console.log(``)
                break;

            default:
                break;
        }
    }

    collectData(): string {
        return 'a'
    }

    public showStatus(): void {
        
    }


}