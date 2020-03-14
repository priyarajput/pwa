import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Item {
  name: string;
  description: string;
  url: string;
  html: string;
  markdown: string;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL: string = "https://www.techiediaries.com/api/data.json";
  constructor(private httpClient: HttpClient) { }
  fetch(): Observable<Item[]> {
    return <Observable<Item[]>>this.httpClient.get(this.baseURL);
  }
}
