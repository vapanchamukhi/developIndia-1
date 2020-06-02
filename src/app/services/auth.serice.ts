import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean;

  JWTToken;

  private url = 'https://develop-india-backend.herokuapp.com/auth';

  constructor(private http: HttpClient) { }

  onPostAuth(form) {
    this.http.post(this.url, form).subscribe(data => console.log('user created'),
      error => console.log("user post error", error));
  }
  // getAuths() {
  //   return this.http.get<GetResponse>(this.url).pipe(
  //     map(response => response._embedded.auths)
  //   );
  // }

  public generateToken(request) {
    console.log("request: ", request)
    return this.http.post(this.url, request, { responseType: 'text' as 'json' }).subscribe(data => {
      console.log("token ", data)
      this.JWTToken = data.toString();
      localStorage.setItem("token", this.JWTToken);
      return this.JWTToken;
    },
      error => console.log("Error while JWT ", error));
  }
  isTokenExpired() {
    let token = localStorage.getItem("token");
    const helper = new JwtHelperService();

    const decodedToken = helper.decodeToken(token);
    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token);
    console.log("Token expired! ", isExpired)
    return !isExpired;
  }

  getCurrentUser() {
    const helper = new JwtHelperService();
    let token = localStorage.getItem("token");
    const decodedToken = helper.decodeToken(token);
    return decodedToken.sub;
  }

}

interface GetResponse {
  _embedded: {
    auths: any[];
  };
}