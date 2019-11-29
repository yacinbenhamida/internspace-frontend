import { User } from './../../models/User';
import { UniversitaryYear } from './../../models/university/universitary-year';
import { FypCategory } from './../../models/fyp/fyp-category';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NullTemplateVisitor } from '@angular/compiler';

/*
Partie Dashboard :
  [x]● List des étudiants en 5eme année qui appartiennent à son Site.
  [x]● Affichage de pourcentage des étudiants qui ont effectué un stage à l’étranger pour l’année universitaire courante, puis.
  [x]● Calcul et affichage d’une courbe qui décrit l'évolution de ce pourcentage au fils des années.
  [ ]● Calcul et affichage des pourcentage des étudiants qui ont effectué un stage dans un
    pays donnée pour une année universitaire donnée, puis, l’évolution de ce pourcentage
    au fil des années.
  [x]● Affichage des N (spécifié par l’user) entreprises qui recrutent le plus grand nombre d’étudiants d’une école spécifiée.
  [x]● Calcul et affichage du nombre des stages par catégorie.
  [ ]● Plot d’une charte qui montre par ordre décroissant les catégories les plus demandées.
  [ ]● Plot de l’évolution du nombre de stages pour une catégorie donnée au fils des
    années (pour dire par exemple, les stages Game Dev augmentent au fils des années, il faut rajouter un module Game Dev).
*/

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

  GetInternshipEvolutionPerUYByCategory(uniId: string, categoryId: string): Observable<any[]> {
    const params = new HttpParams()
      .set('uni', uniId)
      .set('category', categoryId);

    return this.http.get<any[]>(this.baseurl + '/company/category/evolution', { headers: this.headersJSON, params: params });

  }

  GetStudentsBySite(siteId: string): Observable<User[]> {
    const params = new HttpParams()
      .set('site', siteId);

    return this.http.get<User[]>(this.baseurl + '/site/students', { headers: this.headersJSON, params: params });

  }

  GetAbroadPercentagePerYear(uniId: string): Observable<any[]> {
    const params = new HttpParams()
      .set('uni', uniId);

    return this.http.get<any[]>(this.baseurl + '/distribution/abroad', { headers: this.headersJSON, params: params });
  }

  GetMostRequestedCategoriesByCompanies(): Observable<any[]> {
    const params = new HttpParams();
    return this.http.get<any[]>(this.baseurl + '/company/category/most-requested', { headers: this.headersJSON, params: params });
  }

  // *** TODO ***

}
