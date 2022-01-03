import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  selectedId = 1
  generations = [
    { id: 1, name: 'I'}, 
    { id: 2, name: 'II'}, 
    { id: 3, name: 'III'}, 
    { id: 4, name: 'IV'}, 
    { id: 5, name: 'V'}, 
    { id: 6, name: 'VI'}, 
    { id: 7, name: 'VII'}, 
    { id: 8, name: 'VIII'}, 
  ]

  @Output() changeGeneration = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  updatePokemons(id: number): void {
    this.selectedId = id 
    this.changeGeneration.emit(id)
  }

}
