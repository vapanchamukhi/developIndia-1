import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.css']
})
export class AdminBlogsComponent implements OnInit {

  blogsList;

  displayedColumns: string[] = ['title', 'author', 'blog', 'imgUrl'];

  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(data=>{
      console.log("All Blogs: ",data);
      this.blogsList = data;
    },
    error=>console.log("error blog list", error));
  }

}
