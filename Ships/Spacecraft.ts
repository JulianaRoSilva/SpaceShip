export abstract class SpaceCraft {

    protected id: number = 0;
    protected name: string;
    protected fuel: number = 0;
    protected health: number = 100;
    
    
	constructor(name: string) {
        this.name = name
	}

    public getName(): string {
        return this.name
    }

    public getfuel(): number {
        return this.fuel
    }

    public gethealth(): number {
        return this.health
    }

    
    public refuel(): void {
        this.fuel = 100;
    }
    
    public takeDamage(damage: number): void {
        this.health - damage <= 0 ? this.health = 0 : this.health =- damage   
    }
    
    public repair(): void {
        this.health = 100;
    }
    
    public isOperational(): boolean {
        return this.health > 0 && this.fuel > 0 ? true : false; // ternário para retornar true ou false
    }
    
    public abstract showStatus(): void // método abstrado que será subcrito em cada classe
}