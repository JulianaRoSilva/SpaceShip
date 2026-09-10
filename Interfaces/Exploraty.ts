import { Planets } from "../Ships/Planets";


export interface Exploraty {

    // recebe um ENUM do planeta para fazer a exploração
    explore(location: Planets): void; 
    collectData(): string;


}