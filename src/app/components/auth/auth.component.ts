import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.serice';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authList;

  failedLogin: boolean = false;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getAuths().subscribe(data=>{
      console.log("Received AuthLists")
      this.authList = data;
    },
    error=>console.log("Error recveing auths", error))
  }

  login(form: NgForm){
    console.log(this.failedLogin);
    let formData = form.value;
    for(let auth of this.authList){
      if(formData.email === auth.email && formData.password === auth.password){
        localStorage.setItem("develop-login", "true");
        this.authService.loggedIn = true;
        return
      }
    }
    if(!this.authService.loggedIn)
      this.failedLogin = true
  }

  logout(){
    localStorage.removeItem("develop-login")
    this.authService.loggedIn = false;
  }

}
