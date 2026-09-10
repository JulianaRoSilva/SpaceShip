import { Exploraty } from "../Interfaces/Exploraty";
import { earth, jupiter, mars, mercury, neptune, Planets, pluto, saturn, sedna, uranus, venus } from "../Support/Planets";
import { SpaceCraft } from "./Spacecraft";
import { purple, red } from "../Support/Colors";
import { clear, stop } from "../Support/stop";


export class ExplorationShip extends SpaceCraft implements Exploraty {


    public collectData(): string {
        return 'The scientific data were collected.'
    }

    public explore(location: Planets): void {
        if (this.getfuel() >= 10) {

            switch (location) {

                case Planets.MERCURY:
                    clear();

                    mercury();
                    stop();
                    clear();

                    purple(this.collectData());
                    this.setFuel(-10) // usar combustível na jornada
                    stop();
                    break;

                case Planets.VENUS:
                    clear();

                    venus()
                    stop();
                    clear();

                    purple(this.collectData());
                    this.setFuel(-10)

                    stop();
                    break;

                case Planets.EARTH:
                    clear();
                    earth()
                    stop();
                    clear();

                    purple(this.collectData());
                    this.setFuel(-10)

                    stop();
                    break;

                case Planets.MARS:
                    clear();
                    mars()
                    stop();
                    clear();

                    purple(this.collectData());
                    this.setFuel(-10)

                    stop();
                    break;

                case Planets.JUPITER:
                    clear();
                    jupiter()
                    stop();
                    clear();

                    purple(this.collectData());
                    this.setFuel(-10)

                    stop();
                    break;

                case Planets.SATURN:
                    clear();
                    saturn()
                    stop();
                    clear();

                    purple(this.collectData());
                    this.setFuel(-10)

                    stop();
                    break;

                case Planets.URANUS:
                    clear();
                    uranus()
                    stop();
                    clear();

                    purple(this.collectData());
                    this.setFuel(-10)

                    stop();
                    break;

                case Planets.NEPTUNE:
                    clear();
                    neptune()
                    stop();
                    clear();

                    purple(this.collectData());
                    this.setFuel(-10)

                    stop();
                    break;

                case Planets.PLUTO:
                    clear();
                    pluto()
                    stop();
                    clear();

                    purple(this.collectData());
                    this.setFuel(-10)

                    stop();
                    break;

                case Planets.SEDNA:
                    clear();
                    sedna()
                    stop();
                    clear();

                    purple(this.collectData());
                    this.setFuel(-10)

                    stop();
                    break;

                default:
                    clear();
                    red('Imput a valid option!')
                    stop()
                    break;

            }

        } else {
            red('You do not have enough fuel for the journey!');
            stop();
        }
    }


    public showStatus(): void {

    }


}