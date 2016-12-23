import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private loggedIn: boolean = false;

  constructor() { }

  isLoggedIn() {
    return this.loggedIn;
  }
}
