import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { retry } from 'rxjs';
import { ApiEndpoints } from '../api/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getUrl(ending: string) {
    let body = {ending: ending}
    const param = new HttpParams({ fromObject: body  });
    return this.http.get<any>(ApiEndpoints.BASE_URL + ApiEndpoints.SHORTENER, {params: param})
    .pipe(retry({count: 3, delay: 500}))
  }

  postUrl(body: any) {
    return this.http.post<any>(ApiEndpoints.BASE_URL + ApiEndpoints.SHORTENER, body)
  }

  getPerson(body: any) {
    const param = new HttpParams({ fromObject: body  });
    return this.http.get<any>(ApiEndpoints.BASE_URL + ApiEndpoints.PERSONAL, {params: param})
    .pipe(retry({count: 3, delay: 500}))
  }
}