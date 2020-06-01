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
    const headers = this.headers
    return this.http.post(this.url, form, {headers, responseType: 'text' as 'json' });
  }

  getBlogs() {
    const headers = this.headers
    console.log("HEaders", headers);
    return this.http.get<GetResponse>(this.url, {headers}).pipe(
      map(response => response._embedded.blogs)
    );
  }

  getBlogsByDate() {
    const headers = this.headers
    return this.http.get<GetResponse>(this.url+'?sort=lastUpdated,desc', {headers}).pipe(
      map(response => response._embedded.blogs)
    );
  }

  getBlogsById(id){
    const headers = this.headers
    return this.http.get(this.url+'/'+id, { headers});
  }

  updateCount(id, count){
    const headers = this.headers
    return this.http.patch(this.url + '/' + id,{count: count},{headers});
  }

  deleteBlog(id){
    const headers = this.headers
    return this.http.delete(this.url+'/'+id,{ headers});
  }
}
interface GetResponse {
  _embedded: {
    blogs: any[];
  };
}