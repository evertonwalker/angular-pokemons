import { Pipe, PipeTransform } from '@angular/core';
import { PokemonGeneric } from '../interfaces/Pokemon-generic.interface';
import { PokemonService } from '../services/pokemon.service';

@Pipe({ name: 'filterByName' })
export class FilterByName implements PipeTransform {

    constructor(private pokemonService: PokemonService) { }

    transform(valueToTransform: PokemonGeneric[], descriptionQuery: string) {

        descriptionQuery ? descriptionQuery = descriptionQuery : descriptionQuery = "";

        descriptionQuery = descriptionQuery.trim().toLowerCase();

        if (descriptionQuery) {

            const valueFilter = valueToTransform.filter(pokemon => pokemon.name.includes(descriptionQuery))
            if (valueFilter.length > 0) {
                return valueFilter;
            } else {
                this.pokemonService.getPokemonDataByName(descriptionQuery)
                    .subscribe(result => {
                        this.pokemonService.pokemonByTypeSearch.next(result);
                    })
            }


        } else {
            return valueToTransform;
        }
    }

}