import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { PokemonGeneric } from '../interfaces/Pokemon-generic.interface';
import { PokemonRepositoryService } from '../repository/pokemon-repository.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  $pokemons: Observable<PokemonGeneric[]>;
  pokemonsCache;
  pokemonByTypeSearch = new Subject<PokemonGeneric>();

  constructor(private pokemonRepository: PokemonRepositoryService) { }

  getAllPokemons(): Observable<PokemonGeneric[]> {
    if (!this.$pokemons) {
      this.$pokemons = this.pokemonRepository.getAllPokemons()
      this.$pokemons.subscribe(resultApi => {
        this.pokemonsCache = of(resultApi);
      })
      return this.$pokemons;
    } else {
      return this.pokemonsCache;
    }
  }

  getDataPokemonByUrl(url: string): Observable<any> {
    return this.pokemonRepository.getPokemonDataUrl(url);
  }

  getPokemonDataByName(name: string): Observable<any> {
    return this.pokemonRepository.getPokemonByName(name);
  }

  getMorePokekmonsByOffset(offset: number): Observable<PokemonGeneric[]> {
    return this.pokemonRepository.getPokemonByOffSet(offset);
  }

}
