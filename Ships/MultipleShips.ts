import { SpaceCraft } from "./SpaceCraft";
import { CombatCanable } from "../Interfaces/CombatCapable";
import { CargoCarrier } from "../Interfaces/CargoCarrier";
import { Exploraty } from "../Interfaces/Exploraty";
import { earth, mercury, Planets, venus } from "../Support/Planets";
import { purple, red } from "../Support/Colors";
import { clear, stop } from "../Support/stop";

export class MultipleShip extends SpaceCraft implements CombatCanable, CargoCarrier, Exploraty {

    private CargoMax: number = 30; // capacidade maxima reduzida por ser multipla
    private CurrentCargo: number = 0; 
    private weaponPower: number;

    constructor(name: string, power: number) {
        super(name);
        this.weaponPower = power;
    }

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

    // EXPLORATY
    public collectData(): string {
            return 'The scientific data were collected.'
        }
    
        public explore(location: Planets): void { // LOCAIS DE EXPLORAÇÃO REDUZIDOS!!!!
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

    // damage
    atack(target: SpaceCraft): number {
        if (target.isOperational()) {
            const damage = this.weaponPower >= 30 ? 15 : this.weaponPower >= 20 ? 10 : 5

            console.log(`The ship ${this.name} dealt ${damage} damage in ${target.getName()}!`)
            stop()

            target.takeDamage(damage);
            return damage

        } else {
            return 0
        }
    }

}