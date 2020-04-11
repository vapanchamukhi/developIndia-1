import { Component, OnInit } from '@angular/core';
import { ContactusService } from 'src/app/services/contactus.service';

@Component({
  selector: 'app-admin-contactus',
  templateUrl: './admin-contactus.component.html',
  styleUrls: ['./admin-contactus.component.css']
})
export class AdminContactusComponent implements OnInit {

  contactList=[];
  contactCount;

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'message'];
  constructor(private contactService:ContactusService) { }

  ngOnInit(): void {
    this.contactService.getContactus().subscribe(data=>{
      console.log("All contact: ",data);
      this.contactList = data;
      this.contactCount= this.contactList.length;
    },
    error=>console.log("error contact list", error));
  }

}
