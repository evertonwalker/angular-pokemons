import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpTestService {

  constructor(private http: HttpClient) {}

  getData(): Observable<any>{
    return this.http.get('www.url.co');
  }

}
