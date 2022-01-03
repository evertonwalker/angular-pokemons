import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { PokemonGeneric } from '../interfaces/Pokemon-generic.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonRepositoryService {

  url = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<PokemonGeneric[]> {
    return this.http.get<{ results: PokemonGeneric[] }>
      (`${this.url}/pokemon/?limit=25`)
      .pipe(
        map((resultApi) => {
          return resultApi.results;
        })
      )
  }

  getPokemonByOffSet(offset: number): Observable<PokemonGeneric[]> {
    return this.http.get<{ results: PokemonGeneric[] }>
      (`${this.url}/pokemon/?limit=10&offset=${offset}`)
      .pipe(
        map((resultApi) => {
          return resultApi.results;
        })
      )
  }

  getPokemonDataUrl(url: string): Observable<any> {
    return this.http.get(url);
  }

  getPokemonByName(name: string): Observable<any> {
    return this.http.get(this.url + `/pokemon/${name}`)
      .pipe(
        catchError(this.handleErro)
      );
  }

  getPokemonByGeneration(id: number): Observable<[{ name: string, url: string }]> {
    return this.http.get(this.url + `/generation/${id}`)
      .pipe(
        map((result: any) => {
          return result.pokemon_species
        })
      )
  }

  private handleErro(error: HttpErrorResponse) {
    if (error.status === 404) {
      return of(undefined)
    }
  }


}
