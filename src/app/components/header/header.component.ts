import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.serice';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem("develop-login")) {
      this.authService.loggedIn = true;
    }
  }

  logout() {
    this.authService.loggedIn = false;
    localStorage.removeItem("develop-login");
  }

  createProfile() {
    let form = {
      email: 'vidya@developindia.com',
      password: 'vidyadevelopindia'
    }
    let auths;
    this.authService.getAuths().subscribe(data => {
      auths = data
      let authExists = false;
      console.log('Recieved auths in header')
      for (let auth of auths) {
        if (auth.email === form.email && auth.password === form.password) {
          authExists = true;
          break;
        }
      }
      if (!authExists) {
        this.authService.onPostAuth(form);
      }
    },
      error => console.log("error getting auths", error));

  }

}
