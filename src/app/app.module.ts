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

import { PokemonResolve } from './resolvers/pokemon-resolver';
import { ImagemPokemonComponent } from './components/template/imagem-pokemon/imagem-pokemon.component';
import { ElementTypeComponent } from './components/template/element-type/element-type.component';

import { FirstLetterUppercase } from './pipes/first-letter-uppercase.pipe';
import { FilterByName } from './pipes/filter-by-name.pipe';
import { DialogPokemonDirective } from './directives/dialog-pokemon.directive';

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
    FirstLetterUppercase,
    ImagemPokemonComponent,
    ElementTypeComponent,
    DialogPokemonDirective
  ],
  exports: [ DialogPokemonDirective],
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
], { relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
