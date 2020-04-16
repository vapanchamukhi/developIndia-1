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

  onPostBlog(){
    let form = {
      email: 'vidya@develop.com',
      password: 'vidyadevelop'
    }
    return this.http.post(this.url, form);
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