import { Pipe, PipeTransform } from '@angular/core';
import { PokemonGeneric } from '../interfaces/Pokemon-generic.interface';

@Pipe({ name: 'filterByName' })
export class FilterByName implements PipeTransform {

    transform(valueToTransform: PokemonGeneric[], descriptionQuery: string) {

        descriptionQuery ? descriptionQuery = descriptionQuery : descriptionQuery = "";

        descriptionQuery = descriptionQuery.trim().toLowerCase();

        if (descriptionQuery) {
            return valueToTransform.filter(pokemon => pokemon.name.includes(descriptionQuery))
        } else {
            return valueToTransform;
        }
    }

}