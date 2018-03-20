import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  private isloggin = false;
  private username: string;

  getLoginstatus() {
    return this.isloggin;
  }

  setLoginStatus(value) {
    this.isloggin = value;
  }
  getUsername() {
    return this.username;
  }

  setUsername(value) {
    this.username = value;
  }


  constructor() { }

}
