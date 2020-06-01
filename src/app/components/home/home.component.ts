import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { BlogService } from 'src/app/services/blog.service';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  eventsList=[];
  blogsList=[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private eventsService: EventsService,
    private blogsService:BlogService,
    private breakpointObserver: BreakpointObserver) { }

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
