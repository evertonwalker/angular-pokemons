import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { GenerationsComponent } from './generations.component';
import { PokemonService } from 'src/app/services/pokemon.service';

describe('GenerationsComponent', () => {
  let component: GenerationsComponent;
  let fixture: ComponentFixture<GenerationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [PokemonService],
      declarations: [GenerationsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select another generation and change button active generation', () => {
    const firstGeneration = document.getElementById('generation-item-1')
    expect(firstGeneration.className).toContain('selected')

    const secondGeneration = document.getElementById('generation-item-2')
    secondGeneration.click()

    fixture.detectChanges()

    expect(secondGeneration.className).toContain('selected')
    expect(firstGeneration.className).not.toContain('selected')

  })
});
