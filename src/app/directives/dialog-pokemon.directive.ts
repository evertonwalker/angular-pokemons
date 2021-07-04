import { Directive, HostListener, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable, Subject } from "rxjs";
import { concatMap, delay, first } from "rxjs/operators";
import { DetailPokemonComponent } from "../components/detail-pokemon/detail-pokemon.component";
import { PokemonService } from "../services/pokemon.service";

@Directive({
  selector: '[showPokemonOnOver]',
  providers: [ DetailPokemonComponent],
})
export class DialogPokemonDirective {

  @Input() pokemonName: string;
  timeoutChange;

  constructor(private dialogService: MatDialog, private pokemonService: PokemonService) { }

  @HostListener('mouseover')
  darkenOn() {
    // if(!this.timeoutChange) {
    //   clearTimeout(this.timeoutChange)
    //   this.timeoutChange = setTimeout(() => {
    //     this.show(this.pokemonName)
    //   }, 1500);
    //     }


  }

  show(pokemon): void {
    this.pokemonService.getPokemonDataByName(pokemon)
      .subscribe(resultPokemon => {
        this.dialogService.open( DetailPokemonComponent, {
          data: resultPokemon
        })
      })
  }

}
