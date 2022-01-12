import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SonService {

  constructor() { }

  getValue(): string {
    return 'value';
  }

}
