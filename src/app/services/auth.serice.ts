import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn:boolean;

  private url = 'https://develop-india-backend.herokuapp.com/api/auths';

  constructor(private http:HttpClient) { }

  onPostAuth(form){
    this.http.post(this.url, form).subscribe(data=>console.log('user created'),
    error=>console.log("user post error", error));
  }
  getAuths() {
    return this.http.get<GetResponse>(this.url).pipe(
      map(response => response._embedded.auths)
    );
  }
}
interface GetResponse {
  _embedded: {
    auths: any[];
  };
}