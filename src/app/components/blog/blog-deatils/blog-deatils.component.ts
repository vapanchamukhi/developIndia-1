import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-deatils',
  templateUrl: './blog-deatils.component.html',
  styleUrls: ['./blog-deatils.component.css']
})
export class BlogDeatilsComponent implements OnInit {

  id;
  blog;
  count:number;

  constructor(private router: ActivatedRoute, private blogsService: BlogService) { }

  ngOnInit(): void {
    this.router.params.subscribe(param => {
      console.log(param)
      this.id = param['id']
      this.blogsService.getBlogsById(this.id).subscribe(data => {
        console.log('blog: ', data)
        this.blog = data;
        this.count = +this.blog.count;
        console.log('count', this.count);
        this.count++;
        this.blogsService.updateCount(this.id,this.count).subscribe(data=>console.log('count success: ',data),
        error=>console.log('error', error));
      });
    });
  }

}
