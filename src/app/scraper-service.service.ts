import { HttpClient, HttpHeaders } from '@angular/common/http';
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


  public scrapeUrl(urlSource:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(`${this.apiServiceUrl}/scr/fetch`,urlSource,{headers});

  }
}
