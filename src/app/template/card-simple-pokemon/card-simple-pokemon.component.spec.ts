import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PokemonService } from 'src/app/services/pokemon.service';
import { CardSimplePokemonComponent } from './card-simple-pokemon.component';
import { FirstLetterUppercase } from 'src/app/pipes/first-letter-uppercase.pipe';

describe('CardSimplePokemonComponent', () => {
  let component: CardSimplePokemonComponent;
  let fixture: ComponentFixture<CardSimplePokemonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [PokemonService],
      imports: [HttpClientTestingModule],
      declarations: [CardSimplePokemonComponent, FirstLetterUppercase]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSimplePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
