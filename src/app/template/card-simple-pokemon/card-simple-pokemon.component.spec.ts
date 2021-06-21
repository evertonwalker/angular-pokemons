import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardSimplePokemonComponent } from './card-simple-pokemon.component';

describe('CardSimplePokemonComponent', () => {
  let component: CardSimplePokemonComponent;
  let fixture: ComponentFixture<CardSimplePokemonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSimplePokemonComponent ]
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
