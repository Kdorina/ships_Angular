import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "http://localhost:8000/ships";

  constructor(private http:HttpClient) { }

  getShips(){
    let header = new HttpHeaders({
      'Content-Type':'application/json'
    });

    let httpOption={
      headers:header
    }

    return this.http.get<any>(this.url, httpOption);
  }
}
