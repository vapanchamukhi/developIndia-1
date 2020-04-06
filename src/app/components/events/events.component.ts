import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  eventsList;

  constructor(private eventsService:EventsService) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(data=>{
      this.eventsList = data;
      console.log(this.eventsList);
    },
    error=>console.log(error));
    
  }

}
