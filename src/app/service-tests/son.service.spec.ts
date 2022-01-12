import { TestBed } from '@angular/core/testing';

import { SonService } from './son.service';

describe('SonService', () => {
  let service: SonService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [SonService]});
    service = TestBed.inject(SonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return value', () => {
    expect(service.getValue()).toBe('value')
  })

});
