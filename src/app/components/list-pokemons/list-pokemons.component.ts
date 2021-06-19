import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private snackService: SnackServiceService, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.snackService.showSnack('Aqui você pode filtar seus pokemons', 5000);
    this.pokemons$ = this.pokemonService.getAllPokemons();
  }

  filterPokemons(term: string): void {
    this.filter = term;
  }

}
