import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.serice';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  JWTToken;

  failedLogin: boolean = false;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  login(form: NgForm){
    this.failedLogin = false
    console.log(this.failedLogin);
    let formData = form.value;
    this.JWTToken = this.authService.generateToken(formData);
    let d = new Date();
    console.log('time ', d);
    localStorage.setItem("token", this.JWTToken);
    this.authService.loggedIn = true
    if(!this.authService.loggedIn){
      console.log('logged in ', this.authService.loggedIn)
      this.failedLogin = true
    }
  }

  logout(){
    localStorage.removeItem("token")
    this.authService.loggedIn = false;
  }
}
