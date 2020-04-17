import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogList;

  constructor(private blogService: BlogService)  { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(data=>
      {
        this.blogList = data;
        console.log("Blog List: ", data)
      },
      error=>console.log("Error in Blog List", error))
  }

  getBlogById(id){
    
  }

}
