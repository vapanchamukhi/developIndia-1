import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  sideNavOpened= false;

  links = [
    {name:'Manage Blogs', link:'admin-blogs'},
    {name:'Manage Events', link:'admin-events'},
    {name:'Manage Contact Us', link:'admin-contactus'}
]
  constructor() { }

  ngOnInit(): void {
  }

  sideNavFun(){
    console.log(this.sideNavOpened)
    this.sideNavOpened = !this.sideNavOpened;
    console.log(this.sideNavOpened)
  }

}
