import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError, tap } from 'rxjs/operators';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {

  private _siteUrl = 'http://localhost:3000/car_data';

  constructor(private _http: HttpClient) { }

  getCarData(): Observable<ICar[]> {
    return this._http.get<ICar[]>(this._siteUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){
    console.log('CarApiService: ' + err.message);
    return Observable.throw(err.message);
  }

}
