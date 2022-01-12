import { Injectable } from '@angular/core';
import { SonService } from './son.service';

@Injectable({
  providedIn: 'root'
})
export class FatherService {

  constructor(private sonService: SonService) { }

  getValueBySon(): string {
    return this.sonService.getValue();
  }

}
