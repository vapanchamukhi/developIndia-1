import { Component, OnInit } from '@angular/core';
import { ContactusService } from 'src/app/services/contactus.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  success:boolean;
  constructor(private contactusService: ContactusService) { }

  ngOnInit(): void {
  }

  submitContact(form:NgForm){
    console.log("formData= ", form.value)
    this.contactusService.onPostContactus(form.value).subscribe(data=>{
      console.log("contactUs Submitted", data);
      form.reset();
      this.success = true;
    },
    error=>{
      console.log("error on contact userInfo", error);
    });
  }

}
