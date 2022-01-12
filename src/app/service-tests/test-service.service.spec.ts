import { TestBed } from '@angular/core/testing';

import { TestServiceService } from './test-service.service';

describe('TestServiceService', () => {
  let service: TestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getValue should return simpleValue', () => {
    const simpleValue = service.getValue();
    expect(simpleValue).toBe('simpleValue')
  })

  it('#getObservableValue should return observableValue', (done: DoneFn) => {
    service.getObservableValue().subscribe(value => {
      expect(value).toBe('observableValue');
      done();
    })
  })

  it('#getPromiseValue should return promiseValue', (done: DoneFn) => {
    service.getPromiseValue().then(result => {
      expect(result).toBe('promiseValue');
      done();
    });
  });

});
