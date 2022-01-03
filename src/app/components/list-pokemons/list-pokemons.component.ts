import { Component, OnInit } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PokemonGeneric } from 'src/app/interfaces/Pokemon-generic.interface';
import { PokemonService } from 'src/app/services/pokemon.service';
import { SnackServiceService } from 'src/app/services/snack-service.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.css'],
})
export class ListPokemonsComponent implements OnInit {

  pokemons$: Observable<PokemonGeneric[]>;
  filter;
  initOffset = 25;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getNewGeneration(1);
  }

  filterPokemons(term: string): void {
    this.filter = term;
  }

  getNewGeneration(id: number): void {
    this.pokemons$ = this.pokemonService.getPokemonsByGeneration(id)
  }

}
