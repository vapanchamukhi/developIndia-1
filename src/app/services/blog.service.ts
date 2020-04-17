import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url = 'https://develop-india-backend.herokuapp.com/api/blogs';

  constructor(private http:HttpClient) { }

  onPostBlog(form){
    console.log("form Blog Data ",form);
    return this.http.post(this.url, form);
  }

  getBlogs() {
    return this.http.get<GetResponse>(this.url).pipe(
      map(response => response._embedded.blogs)
    );
  }

  getBlogsById(url){
    return this.http.get(url);
  }
}
interface GetResponse {
  _embedded: {
    blogs: any[];
  };
}