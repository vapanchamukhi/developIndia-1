import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-deatils',
  templateUrl: './blog-deatils.component.html',
  styleUrls: ['./blog-deatils.component.css']
})
export class BlogDeatilsComponent implements OnInit {

  id;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(param => {
      console.log(param)
      this.id = param['id']
    })
  }

}
