import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url = 'http://localhost:8080/api/blogs';

  constructor(private http:HttpClient) { }

  onPostBlog(form){
    console.log("form Blog Data ",form);
    return this.http.post(this.url, form);
  }
}
