import { Injectable } from '@angular/core';
import {MyModalComponent} from './my-modal/my-modal.component';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MyApiClientService {

  constructor(private httpClient: HttpClient) { }

  get<T>(): Observable<T> {
        let headers: HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json');
        return this.httpClient.get<T>('https://reqres.in/api/users?page=2', {headers: headers});
   }
 }
