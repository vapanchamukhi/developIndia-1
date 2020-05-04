import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.css']
})
export class AdminEventsComponent implements OnInit {

  eventsList;

  displayedColumns: string[] = ['eventName', 'eventDescription', 'eventImgPath', 'actions'];
  deleted: boolean = false;

  constructor(private eventsService:EventsService, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(data=>{
      console.log("All events: ",data);
      this.eventsList = data;
    },
    error=>console.log("error evnents list", error));
  }

  delete(id){
    this.dialogService.openConfirmDialog("Are you sure to delete this blog?")
      .afterClosed().subscribe(res =>{
        this.eventsService.deleteEvent(id).subscribe(data=>{
          console.log('deleted', data);
          this.deleted = true;
          this.ngOnInit();
        })
      });
    
  }

}
