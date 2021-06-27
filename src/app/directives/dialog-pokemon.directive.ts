import { Directive, HostListener, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DetailPokemonComponent } from "../components/detail-pokemon/detail-pokemon.component";
import { PokemonService } from "../services/pokemon.service";

@Directive({
  selector: '[showPokemonOnOver]'
})
export class DialogPokemonDirective {

  @Input() pokemonName: string;

  constructor(private dialogService: MatDialog, private pokemonService: PokemonService) { }

  @HostListener('mouseover')
  darkenOn() {

      this.pokemonService.getPokemonDataByName(this.pokemonName)
        .subscribe(result => {
          this.dialogService.open( DetailPokemonComponent, {
            data: result
          })

        })

  }

}
