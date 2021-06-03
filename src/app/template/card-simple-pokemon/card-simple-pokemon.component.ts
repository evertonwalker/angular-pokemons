import { Component, Input, OnInit } from '@angular/core';
import { PokemonGeneric } from 'src/app/interfaces/Pokemon-generic.interface';

@Component({
  selector: 'app-card-simple-pokemon',
  templateUrl: './card-simple-pokemon.component.html',
  styleUrls: ['./card-simple-pokemon.component.css']
})
export class CardSimplePokemonComponent implements OnInit {

  @Input() pokemon: PokemonGeneric;

  constructor() { }

  ngOnInit(): void {
  }

  getFisrtCaps(name: string): string {
    let nameBroked = name.split("");
    nameBroked[0] = nameBroked[0].toUpperCase();
    let resultString =  nameBroked.toString().replace(/,/g,'')
    return resultString;
  }

}
