
// classes com essa implementação precisam ter dois parametros: cargoCapacity e currentCargo
// A capacidade de carga deverá ser definida pela classe que implementar a interface.

export interface CargoCarrier {
    
    loadCargo(amount: number): void; // carregar carga
    unloadCargo(amount: number): void; // descarregar carga

    getCargoCapacity(): number; // capacidade total da carga
    getCurrentCargo(): number; // carga atual

}