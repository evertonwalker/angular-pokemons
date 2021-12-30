import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PokemonService } from 'src/app/services/pokemon.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { ListPokemonsComponent } from './list-pokemons.component';
import { LoadingSpinnerComponent } from 'src/app/template/loading-spinner/loading-spinner.component';
import { GenerationsComponent } from '../template/generations/generations.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MaterialModule } from 'src/app/material.module';
import { TitlePageComponent } from 'src/app/template/title-page/title-page.component';

describe('ListPokemonsComponent', () => {
  let component: ListPokemonsComponent;
  let fixture: ComponentFixture<ListPokemonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MaterialModule],
      providers: [PokemonService],
      declarations: [ListPokemonsComponent, LoadingSpinnerComponent, GenerationsComponent, TitlePageComponent, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
