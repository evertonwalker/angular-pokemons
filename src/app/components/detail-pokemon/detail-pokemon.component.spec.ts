import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { DetailPokemonComponent } from './detail-pokemon.component';

describe('DetailPokemonComponent', () => {
  let component: DetailPokemonComponent;
  let fixture: ComponentFixture<DetailPokemonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ DetailPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
