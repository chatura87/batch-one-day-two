import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private loginService: LoginService, private httpClient: HttpClient) {
    this.httpClient.get("http://jsonplaceholder.typicode.com/users").subscribe(response => {
      console.log(response);
    });
  }

  isUserLoggedIn = this.loginService.getLoginstatus();
  username = this.loginService.getUsername();

}
