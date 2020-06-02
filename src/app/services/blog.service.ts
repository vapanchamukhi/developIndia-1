import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { AuthService } from './auth.serice';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url = 'http://develop-india-backend.herokuapp.com/api/blogs';
  
  headers;

  constructor(private http:HttpClient, private authService: AuthService) { 
    let JWTToken = localStorage.getItem("token");
    console.log("Get Blog key", JWTToken)
    let tokenstr = 'Bearer '+ JWTToken;
    this.headers = new HttpHeaders().set("Authorization", tokenstr);
  }

  onPostBlog(form){
    console.log("form Blog Data ",form);
    return this.http.post(this.url, form, {headers: this.headers});
  }

  getBlogs() {
    return this.http.get<GetResponse>(this.url).pipe(
      map(response => response._embedded.blogs)
    );
  }

  getBlogsByDate() {
    return this.http.get<GetResponse>(this.url+'?sort=lastUpdated,desc').pipe(
      map(response => response._embedded.blogs)
    );
  }

  getBlogsById(id){
    return this.http.get(this.url+'/'+id);
  }

  updateCount(id, count){
    return this.http.patch(this.url + '/' + id,{count: count},{headers: this.headers});
  }

  deleteBlog(id){
    return this.http.delete(this.url+'/'+id,{headers: this.headers});
  }
}
interface GetResponse {
  _embedded: {
    blogs: any[];
  };
}