import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonGeneric } from '../interfaces/Pokemon-generic.interface';
import { PokemonRepositoryService } from '../repository/pokemon-repository.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  $pokemons: Observable<PokemonGeneric[]>;

  constructor(private pokemonRepository: PokemonRepositoryService) { }

  getAllPokemons(): Observable<PokemonGeneric[]> {
    if(!this.$pokemons) {
      this.$pokemons = this.pokemonRepository.getAllPokemons();
      return this.$pokemons;
    } else {
      return this.$pokemons;
    }
  }

  getDataPokemonByUrl(url: string): Observable<any>{
    return this.pokemonRepository.getPokemonDataUrl(url);
  }

  getPokemonDataByName(name: string): Observable<any> {
    return this.pokemonRepository.getPokemonByName(name);
  }


}
