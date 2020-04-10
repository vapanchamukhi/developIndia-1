import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  private url = 'http://localhost:8080/api/contactuses';

  constructor(private http:HttpClient) { }

  onPostContactus(form){
    console.log("form Data ",form)
    let response = this.http.post(this.url, form)
    return response;
  }
}

