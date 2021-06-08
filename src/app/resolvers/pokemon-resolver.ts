import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PokemonService } from '../services/pokemon.service';

@Injectable({
    providedIn: 'root'
})
export class PokemonResolve implements Resolve<any>{

    constructor(private pokemonService: PokemonService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {

        const { name } = route.params;

        return this.pokemonService.getPokemonDataByName(name)
            .pipe(
                map(resultPokemon => {
                    return resultPokemon;
                }),
                catchError(() => {
                    this.router.navigate([''])
                    return of(null)
                })
            )

    }

}