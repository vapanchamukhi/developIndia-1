import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { EventsService } from 'src/app/services/events.service';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  eventsList=[];
  blogsList=[];

  constructor(private eventsService: EventsService,
    private blogsService:BlogService) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(data=>{
      this.eventsList = data;
      let tempEvents=[];
      let count =1;
      for(let event of this.eventsList){
        if(count<4){
          tempEvents.push(event);
          count++;
        }
        console.log('tempevents: ', tempEvents)
      }
      this.eventsList = tempEvents;
    });

    this.blogsService.getBlogs().subscribe(data=>{
      this.blogsList = data;
      let tempBlogs=[];
      let count =1;
      for(let blog of this.blogsList){
        if(count<4){
          tempBlogs.push(blog);
          count++;
        }
        else{
          count =1;
        }
      }
      this.blogsList = tempBlogs;
    });
  }
  
}
