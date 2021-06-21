import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ElementTypeComponent } from './element-type.component';

describe('ElementTypeComponent', () => {
  let component: ElementTypeComponent;
  let fixture: ComponentFixture<ElementTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
