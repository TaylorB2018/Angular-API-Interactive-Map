import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  private apiUrl = 'http://api.worldbank.org/v2/country/';

  constructor(private http: HttpClient) { }
//Gets parameter from Map component 
  getData(countryCode: string | null ) {
    return this.http.get(`${this.apiUrl}${countryCode}?format=json`);
  }
}
