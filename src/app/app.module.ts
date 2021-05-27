import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ListPokemonsComponent } from './components/list-pokemons/list-pokemons.component';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { NotFoundComponent } from './components/not-found/not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListPokemonsComponent,
    DetailPokemonComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'pokemon-list', component: ListPokemonsComponent,

      },
      {
        path: '/detail-pokemon/:id', component: DetailPokemonComponent,
      },
      {
        path: '', redirectTo: '/pokemon-list', pathMatch: 'full'
      },
      { 
        path: '**', component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
