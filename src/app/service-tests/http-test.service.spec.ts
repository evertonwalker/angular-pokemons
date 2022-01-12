import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { defer, of } from 'rxjs';

import { HttpTestService } from './http-test.service';

/**
 * Create async observable that emits-once and completes
 * after a JS engine turn
 */
 export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

/**
 * Create async observable error that errors
 * after a JS engine turn
 */
export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

describe('HttpTestService', () => {
  let service: HttpTestService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>

  beforeEach(() => {

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = new HttpTestService(httpClientSpy);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return some data from client', (done: DoneFn) => {
    const expectData = [{ id: 1, name: 'Everton' }, { id: 2, name: 'Walker' }];
    httpClientSpy.get.and.returnValue(asyncData(expectData));

    service.getData().subscribe(result => {
      expect(result).toEqual(expectData, 'the same data');
      done();
    }, done.fail)

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  })

  it('Should return an error when the server return a 404', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    service.getData().subscribe(
      () => done.fail('expect an error, not result'),
      error => {
        expect(error.message).toContain('Not found');
        done();
      }
    );
  });

});
