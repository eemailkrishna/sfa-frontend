import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  apiUrl = environment.url;

  constructor(private http: HttpClient) { }

  get1(url: string) {
    return this.http.get(`${this.apiUrl}${url}`);
  }

  post(url: string, req: object) {
    return this.http.post(`${this.apiUrl}${url}`, req);
  }

  put(url: string, req: object) {
    return this.http.put(`${this.apiUrl}${url}`, req);
  }

  delete(url: string) {
    return this.http.delete(`${this.apiUrl}${url}`);
  }
}
