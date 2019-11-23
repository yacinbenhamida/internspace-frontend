import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UniStatsService {

  key = 'e6447ab970454075acf54ec8b19718d5';
  headers: HttpHeaders;
  httpOptions: {};

  constructor(private http: HttpClient) {

    this.headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    });

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      })
    };

  }

  // Http Headers


  GetCoordsByCountryName(countryName: string): Observable<String> {
    // key: e6447ab970454075acf54ec8b19718d5
    const params = new HttpParams()
      .set('q', countryName)
      .set('key', this.key);

    const url = 'https://api.opencagedata.com/geocode/v1/json';
    console.log('Calling forward geocoding service.');
    return this.http.get<String>(url, { headers: this.headers, params: params });
  }
}
