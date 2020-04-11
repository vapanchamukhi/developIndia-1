import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  private url = 'https://develop-india-backend.herokuapp.com/api/contactuses';

  constructor(private http: HttpClient) { }

  onPostContactus(form) {
    console.log("form Data ", form)
    let response = this.http.post(this.url, form) 
    return response;
  }
  getContactus() {
    return this.http.get<GetResponse>(this.url).pipe(
      map(response => response._embedded.contactuses)
    );
  }
}
interface GetResponse {
  _embedded: {
    contactuses: any[];
  };
}