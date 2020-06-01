import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  private url = 'https://develop-india-backend.herokuapp.com/api/contactuses';

  headers;

  constructor(private http: HttpClient) { 
    let JWTToken = localStorage.getItem("token");
    console.log("Get Blog key", JWTToken)
    let tokenstr = 'Bearer '+ JWTToken;
    this.headers = new HttpHeaders().set("Authorization", tokenstr);
  }

  onPostContactus(form) {
    console.log("form Data ", form)
    let response = this.http.post(this.url, form,{headers: this.headers}) 
    return response;
  }
  getContactus() {
    return this.http.get<GetResponse>(this.url).pipe(
      map(response => response._embedded.contactuses,{headers: this.headers})
    );
  }
}
interface GetResponse {
  _embedded: {
    contactuses: any[];
  };
}