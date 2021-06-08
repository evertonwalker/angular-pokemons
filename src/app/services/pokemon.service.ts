import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonGeneric } from '../interfaces/Pokemon-generic.interface';
import { PokemonRepositoryService } from '../repository/pokemon-repository.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private pokemonRepository: PokemonRepositoryService) { }

  getAllPokemons(): Observable<PokemonGeneric[]> {
    return this.pokemonRepository.getAllPokemons();
  }

  getDataPokemonByUrl(url: string): Observable<any>{
    return this.pokemonRepository.getPokemonDataUrl(url);
  }

  getPokemonDataByName(name: string): Observable<any> {
    return this.pokemonRepository.getPokemonByName(name);
  }


}
