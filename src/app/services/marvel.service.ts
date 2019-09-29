import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private hash: string;
  private httpHeader: HttpHeaders;

  private apiUrl: string;
  private apiKey: string;
  private keys: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiMarvelUrl;
    this.hash = environment.apiHash;
    this.apiKey = environment.apiKey;
    this.keys = `&ts=1&apikey=${this.apiKey}&hash=${this.hash}`;
  }

  getMethod(endpoint: string, params: string) {
    const urlGet = `${this.apiUrl}${endpoint}?${params}${this.keys}`
    this.http.get(urlGet, { headers: this.httpHeader }).subscribe(
      res => {
        console.log(res);
      }
    );
  }

  posMethod() {
    // return this.http.post(this.apiUrl + "Customers", JSON.stringify(customer), { headers: this.httpHeaders });
  }
}
