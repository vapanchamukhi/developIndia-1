import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.css']
})
export class AdminBlogsComponent implements OnInit {

  blogsList;
  deleted = false;

  displayedColumns: string[] = ['title', 'author', 'blog', 'imgUrl','actions'];

  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(data=>{
      console.log("All Blogs: ",data);
      this.blogsList = data;
    },
    error=>console.log("error blog list", error));
  }
  delete(id){
    this.blogService.deleteBlog(id).subscribe(data=>{
      console.log('deleted', data);
      this.deleted = true;
      this.ngOnInit();
    })
  }

}
