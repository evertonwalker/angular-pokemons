import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { PokemonGeneric } from '../interfaces/Pokemon-generic.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonRepositoryService {

  url = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<PokemonGeneric[]> {
    return this.http.get<{ count: number, next: string, previous: string, results: PokemonGeneric[] }>
      (`${this.url}/pokemon/?limit=1118`)
      .pipe(
        delay(3000),
        map((resultApi) => {
          return resultApi.results;
        })
      )
  }

  getPokemonDataUrl(url: string): Observable<any>{
    return this.http.get(url);
  }

  getPokemonByName(name: string): Observable<any>{
    return this.http.get(this.url + `/pokemon/${name}`);
  }


}
