import { Directive, HostListener, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable, Subject } from "rxjs";
import { concatMap, delay, first } from "rxjs/operators";
import { DetailPokemonComponent } from "../components/detail-pokemon/detail-pokemon.component";
import { PokemonService } from "../services/pokemon.service";

const DELAY = 3000;
@Directive({
  selector: '[showPokemonOnOver]',
  providers: [ DetailPokemonComponent],
})
export class DialogPokemonDirective {

  @Input() pokemonName: string;
  private readonly eventStream = new Subject<any>();

  get eventStream$(): Observable<any> {
    return this.eventStream.pipe(
      delay(DELAY),
      first(),
      concatMap(() => this.eventStream)
    );
  }

  constructor(private dialogService: MatDialog, private pokemonService: PokemonService) {
    this.eventStream$.subscribe(pokemon => this.show(pokemon))
   }

  @HostListener('mouseover')
  darkenOn() {
    this.eventStream.next(this.pokemonName)
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
