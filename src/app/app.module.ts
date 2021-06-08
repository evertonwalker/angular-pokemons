import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListPokemonsComponent } from './components/list-pokemons/list-pokemons.component';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TitlePageComponent } from './template/title-page/title-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module';
import { InputFilterComponent } from './template/input-filter/input-filter.component';
import { CardSimplePokemonComponent } from './template/card-simple-pokemon/card-simple-pokemon.component';
import { LoadingSpinnerComponent } from './template/loading-spinner/loading-spinner.component';

import { FilterByName } from './pipes/filter-by-name.ipe';
import { PokemonResolve } from './resolvers/pokemon-resolver';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListPokemonsComponent,
    DetailPokemonComponent,
    NotFoundComponent,
    TitlePageComponent,
    InputFilterComponent,
    CardSimplePokemonComponent,
    LoadingSpinnerComponent,
    FilterByName,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'pokemon-list', component: ListPokemonsComponent,

      },
      {
        path: 'detail-pokemon/:name', component: DetailPokemonComponent,
        resolve: {
          pokemon: PokemonResolve
        }
      },
      {
        path: '', redirectTo: '/pokemon-list', pathMatch: 'full'
      },
      { 
        path: '**', component: NotFoundComponent
      }
    ]),
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
