import { TestBed } from '@angular/core/testing';

import { FatherService } from './father.service';
import { SonService } from './son.service';

describe('FatherService', () => {
  let service: FatherService;
  let sonService: jasmine.SpyObj<SonService>

  beforeEach(() => {

    const spy = jasmine.createSpyObj('ValueService', ['getValue']);

    TestBed.configureTestingModule({
      providers: [
        FatherService,
        { provide: SonService, useValue: spy}
      ]
    });
    service = TestBed.inject(FatherService);
    sonService = TestBed.inject(SonService) as jasmine.SpyObj<SonService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return value', () => {
    const valueToReturn = 'value';
    sonService.getValue.and.returnValue(valueToReturn);

    expect(service.getValueBySon()).toBe('value');
  })

});
