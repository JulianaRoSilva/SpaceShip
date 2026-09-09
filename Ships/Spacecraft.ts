export abstract class SpaceCraft {

    protected id: number = 0;
    protected name: String;
    protected fuel: number = 0;
    protected health: number;


	constructor(name: string, health: number) {
        this.name = name
        this.health = health
	}

    protected refuel(): void {
        this.fuel = 100;
    }

    protected takeDamage(damage: number): void {
        this.health - damage <= 0 ? this.health = 0 : this.health =- damage   
    }
    

    protected repair(): void {
        this.health = 100;
    }
    
    protected abstract showStatus(): void // método abstrado que será subcrito em cada classe



}