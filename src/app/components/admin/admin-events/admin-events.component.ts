import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.css']
})
export class AdminEventsComponent implements OnInit {

  eventsList;

  displayedColumns: string[] = ['eventName', 'eventDescription', 'eventImgPath'];

  constructor(private eventsService:EventsService) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(data=>{
      console.log("All events: ",data);
      this.eventsList = data;
    },
    error=>console.log("error evnents list", error));
  }

}
