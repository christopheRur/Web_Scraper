import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { scraperWeb } from './scraperWeb';

@Injectable({
  providedIn: 'root'
})
export class ScraperServiceService {

  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  public scrapeUrl(urlSource:scraperWeb):Observable<any>{
    console.log("--------------------------->"+urlSource)

    return this.http.post<any>(`${this.apiServiceUrl}/src/fetch`,urlSource);

  }
}
