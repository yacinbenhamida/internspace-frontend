import { UniversitaryYear } from './../../models/university/universitary-year';
import { FypCategory } from './../../models/fyp/fyp-category';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UniStatsService {

  key = 'e6447ab970454075acf54ec8b19718d5';
  headers: HttpHeaders;
  headersJSON: HttpHeaders;
  cachedCountryJSON: {};
  httpOptions: {};

  // Base url
  baseurl = '/api/dashboard';

  constructor(private http: HttpClient) {

    this.headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    });

    this.headersJSON = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      })
    };

    // Prepare reverse iso countries data cache
    this.cachedCountryJSON = {};
    this.http.get('assets/data/isoCountries.json').subscribe(data => {
      for (const key in data) {
        if (key) {
          this.cachedCountryJSON[data[key]] = key;
        }
      }
    }
    );

  }

  // External API
  GetCoordsByCountryName(countryName: string): Observable<String> {
    // key: e6447ab970454075acf54ec8b19718d5
    const params = new HttpParams()
      .set('q', countryName)
      .set('key', this.key);

    const url = 'https://api.opencagedata.com/geocode/v1/json';
    console.log('Calling forward geocoding service.');
    return this.http.get<String>(url, { headers: this.headers, params: params });
  }

  // Local
  GetCountryCodeByName(countryName: string): String {

    if (this.cachedCountryJSON.hasOwnProperty(countryName)) {
      return this.cachedCountryJSON[countryName];
    } else {
      return countryName;
    }
  }

  // GET
  GetStudentsLocationDistribution(uniId: string, abroad: boolean): Observable<number> {
    const params = new HttpParams()
      .set('uni', uniId)
      .set('abroad', abroad ? '1' : '0');

    return this.http.get<number>(this.baseurl + '/internship/distribution', { headers: this.headersJSON, params: params });
  }

  GetStudentInternshipPerCountry(uniId: string): Observable<any> {

    const params = new HttpParams()
      .set('uni', uniId);

    return this.http.get<number>(this.baseurl + '/internship/per-country', { headers: this.headersJSON, params: params });

  }

  GetCategories(): Observable<FypCategory[]> {
    const params = new HttpParams();
    return this.http.get<FypCategory[]>(this.baseurl + '/helper/categories', { headers: this.headersJSON, params: params });

  }

  GetUniversitaryYears(): Observable<UniversitaryYear[]> {
    const params = new HttpParams();
    return this.http.get<UniversitaryYear[]>(this.baseurl + '/helper/uys', { headers: this.headersJSON, params: params });

  }

  GetInternshipEvolutionPerUYByCategory(uniId: string, categoryId: string): Observable<Object> {
    const params = new HttpParams()
      .set('uni', uniId)
      .set('category', categoryId);

    return this.http.get<Object>(this.baseurl + '/company/category/evolution', { headers: this.headersJSON, params: params });

  }

  // GetInternshipEvolutionPerUYByCategory(uniId: string, category: string)

  // *** TODO ***

  getStudentsBySite(uniId: string): Observable<any> {
    return null;
  }

}
