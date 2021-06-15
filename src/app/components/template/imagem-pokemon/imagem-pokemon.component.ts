import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagem-pokemon',
  templateUrl: './imagem-pokemon.component.html',
  styleUrls: ['./imagem-pokemon.component.css']
})
export class ImagemPokemonComponent implements OnInit {

  @Input() url: string;

  constructor() { }

  ngOnInit(): void {
  }

}
