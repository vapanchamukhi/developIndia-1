import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  success = false;

  constructor(private eventService:EventsService) { }

  ngOnInit(): void {
  }

  onPostEvent(form:NgForm){
    this.eventService.onPostNewEvent(form).subscribe(data=>{
      console.log(data)
      form.reset();
      this.success = true;
    },
    error=>{
      console.log(error)
    alert("failed!")}
      );
  }

}
