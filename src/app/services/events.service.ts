import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  success;

  private url = 'https://develop-india-backend.herokuapp.com/api/eventses';

  headers;

  constructor(private http:HttpClient) { 
    let JWTToken = localStorage.getItem("token");
    console.log("Get Blog key", JWTToken)
    let tokenstr = 'Bearer '+ JWTToken;
    this.headers = new HttpHeaders().set("Authorization", tokenstr);
  }

  onPostNewEvent(form:NgForm){
    console.log(form.value)
    let response = this.http.post(this.url, form.value,{headers: this.headers})
    return response;
  }
  
  getEvents(){
    return this.http.get<GetResponse>(this.url+'?sort=title').pipe(
      map(response => response._embedded.eventses)
    );
  }

  getEventsByDate(){
    return this.http.get<GetResponse>(this.url+'?sort=lastUpdated,desc').pipe(
      map(response => response._embedded.eventses)
    );
  }


  deleteEvent(id){
    return this.http.delete(this.url+'/'+id,{headers: this.headers});
  }
}
interface GetResponse {
  _embedded: {
    eventses: any[];
  };
}
