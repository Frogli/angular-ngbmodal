import { Injectable } from '@angular/core';
import {MyModalComponent} from './my-modal/my-modal.component';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MyApiClientService {

  constructor(private httpClient: HttpClient) { }

  get<T>(): Observable<T> {
    return this.httpClient.get<T>('https://reqres.in/api/users?page=2')
  }
}