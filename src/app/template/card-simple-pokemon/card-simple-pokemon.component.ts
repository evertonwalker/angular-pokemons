import { Component, Input, OnInit } from '@angular/core';
import { PokemonGeneric } from 'src/app/interfaces/Pokemon-generic.interface';

@Component({
  selector: 'app-card-simple-pokemon',
  templateUrl: './card-simple-pokemon.component.html',
  styleUrls: ['./card-simple-pokemon.component.css']
})
export class CardSimplePokemonComponent implements OnInit {

  @Input() pokemon: PokemonGeneric;
  urlLink;

  constructor() { }

  ngOnInit(): void {
    this.urlLink = '../detail-pokemon/' + this.pokemon.name;
  }

}
