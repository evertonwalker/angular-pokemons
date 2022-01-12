import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }

  getValue(): string {
    return 'simpleValue'
  }

  getObservableValue(): Observable<string>{
    return of('observableValue');
  }

  getPromiseValue(): Promise<string> {
    return Promise.resolve('promiseValue');
  }
}
