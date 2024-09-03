import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/app-interfaces';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  selectedId: number;
  selectedUser: IUser;
  isUserFound: boolean = true;

  users: IUser[] = [
    {
      id: 1,
      name: 'Foad'
    },
    {
      id: 2,
      name: 'Shadmehr'
    },
    {
      id: 3,
      name: 'Mahyar'
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedId = +this.route.snapshot.params['id'];
    this.selectedUser = this.users.find(user => user.id === this.selectedId);
    if (!this.selectedUser) {
      this.isUserFound = false;
    }
    this.route.params.subscribe((params: Params) => {
      this.selectedUser = this.users.find(user => user.id === +params['id']);
    });
  }

}
