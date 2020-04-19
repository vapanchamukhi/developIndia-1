import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  eventsList;

  constructor(private eventService:EventsService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(data=>{
      this.eventsList = data;
    })
  }

}
