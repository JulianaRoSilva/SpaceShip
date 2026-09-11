import { SpaceCraft } from "../Ships/SpaceCraft";

/**
 Interface que serve para implementar o método ataque naquelas naves em que irão atacar
 - sem implementação de lógica, apenas algo que deve ser implementado, um contrato
 */ 

export interface CombatCanable {
    
    atack(target: SpaceCraft): number;

}

