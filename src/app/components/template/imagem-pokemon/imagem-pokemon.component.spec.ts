import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImagemPokemonComponent } from './imagem-pokemon.component';

describe('ImagemPokemonComponent', () => {
  let component: ImagemPokemonComponent;
  let fixture: ComponentFixture<ImagemPokemonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagemPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagemPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
