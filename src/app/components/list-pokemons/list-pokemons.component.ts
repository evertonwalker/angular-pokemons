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

  pokemons$: PokemonGeneric[] = []
  filter;
  initOffset = 25;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe(result => this.pokemons$ = result);
    this.pokemonService.pokemonByTypeSearch.subscribe(result => {
      this.pokemons$.push(result);
    })
  }

  filterPokemons(term: string): void {
    this.filter = term;
  }

  onScroll(): void {
    this.initOffset += 25;

    this.pokemonService.getMorePokekmonsByOffset(this.initOffset)
      .subscribe(resultNewPokemons => {
        this.pokemons$ = [...this.pokemons$, ...resultNewPokemons]
      });

  }

}
