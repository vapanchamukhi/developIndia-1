import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  success:boolean;
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }

  onPostBlog(form:NgForm){
    this.blogService.onPostBlog(form.value).subscribe(data=>{
      console.log("Sucess Blogs",data)
    form.reset();
    this.success = true;
    },
    error=>{
      console.log("error in blog: ",console.log(error))
      alert("failed!");
    })
  }
  
  

}
