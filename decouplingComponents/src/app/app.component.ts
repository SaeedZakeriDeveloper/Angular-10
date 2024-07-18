import { Component } from '@angular/core';
import { user } from './app-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: user[] = [];

  public userAdded(users: user[]) {
    this.users = users;
  }

}
