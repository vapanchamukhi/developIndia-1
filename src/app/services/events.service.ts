import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  success;

  private url = 'http://localhost:8080/api/eventses';

  constructor(private http:HttpClient) { }

  onPostNewEvent(form:NgForm){
    console.log(form.value)
    let response = this.http.post(this.url, form.value)
    return response;
  }

  getEvents(){
    return this.http.get<GetResponse>(this.url).pipe(
      map(response => response._embedded.eventses)
    );
  }
}
interface GetResponse {
  _embedded: {
    eventses: any[];
  };
}
