import {Component, OnInit} from "@angular/core";
import { Router} from "@angular/router";
import {LoginService} from "../login.service";

@Component({
  selector: "app-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.css"]
})
export class ContainerComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) {
  }

  onSubmit(values) {
    this.loginService.setLoginStatus(true);
    this.loginService.setUsername(values.username);
    this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}
