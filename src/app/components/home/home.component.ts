import { Component, OnInit } from '@angular/core';
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
    this.eventsService.getEventsByDate().subscribe(data=>{
      this.eventsList = data;
      let tempEvents=[];
      let count =1;
      for(let event of this.eventsList){
        if(count<5){
          tempEvents.push(event);
          count++;
        }
        console.log('tempevents: ', tempEvents)
      }
      this.eventsList = tempEvents;
    });

    this.blogsService.getBlogsByDate().subscribe(data=>{
      this.blogsList = data;
      let tempBlogs=[];
      let count =1;
      for(let blog of this.blogsList){
        if(count<5){
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
