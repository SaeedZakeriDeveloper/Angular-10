import { Component } from '@angular/core';
import { IUser } from './app-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: IUser = {
    name: 'Foad',
    age: 40
  }

  users: IUser[] = [
    {
      name: 'Foad',
      age: 40
    },
    {
      name: 'Rezvan',
      age: 32
    },
    {
      name: 'Farzad',
      age: 30
    },
    {
      name: 'Artin',
      age: 1
    }
  ];

  public onSelectChanges(user: IUser) {
    console.log(user);
  }

}
