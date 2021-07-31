import { Component, Input, OnInit } from '@angular/core';
import { PokemonGeneric } from 'src/app/interfaces/Pokemon-generic.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card-simple-pokemon',
  templateUrl: './card-simple-pokemon.component.html',
  styleUrls: ['./card-simple-pokemon.component.css']
})
export class CardSimplePokemonComponent implements OnInit {

  @Input() pokemon: PokemonGeneric;
  urlLink;
  imagePokemon: string

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.urlLink = '../detail-pokemon/' + this.pokemon.name;
    this.pokemonService.getPokemonDataByName(this.pokemon.name)
      .subscribe(result => {
        this.imagePokemon = result.sprites.front_default;
      })
  }

}
