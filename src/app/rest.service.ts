import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
//import 'rxjs/add/operator/toPromise';
//import { Observable } from "rxjs/Rx";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const endpoint = 'https://smarthome-e2027.firebaseio.com/temperature.json';
const state = 'https://smarthome-e2027.firebaseio.com/test.json';

@Injectable({
  providedIn: 'root'
})

export class RestService {
  private headers: Headers;


  constructor(private http: HttpClient) { }
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }


  getProducts(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }

  getstate(): Observable<any> {
    return this.http.get(state).pipe(
      map(this.extractData));
  }



}

 