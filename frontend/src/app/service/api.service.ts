import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private _http : HttpClient ) { }
  getData(){
    return this._http.get('http://localhost:8080/api');
  }
}