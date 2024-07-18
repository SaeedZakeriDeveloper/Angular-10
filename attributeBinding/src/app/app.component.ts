import { Component, OnInit, ɵɵpureFunction1 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isCorrect: boolean = false;

  isModified: boolean = true;
  isCancelled: boolean = true;

  switchProperty: string = "c";

  users: string[] = ['Foad', 'Rezvan', 'Milad', 'Farzad', 'Miad'];

  usersObj: any = [
    {
      id: 1,
      name: 'Foad'
    },
    {
      id: 2,
      name: 'Rezvan'
    },
    {
      id: 3,
      name: 'Milad'
    },
    {
      id: 4,
      name: 'Mona7'
    },
    {
      id: 5,
      name: 'Farzad'
    },
    {
      id: 6,
      name: 'Miad'
    },
    {
      id: 7,
      name: 'Mona'
    },
    {
      id: 8,
      name: 'Mona2'
    }
  ];

  styles = {};
  classes = {};

  ngOnInit(): void {
    this.styles = {
      'font-size': this.isCorrect ? '2rem' : '8rem',
      'color': 'red'
    };

    this.classes = {
      'big-font-size': this.isModified,
      'cancelled-color': this.isCancelled
    }
  }

  public addNewUser() {
    this.usersObj = [
      {
        id: 1,
        name: 'Foad'
      },
      {
        id: 2,
        name: 'Rezvan'
      },
      {
        id: 3,
        name: 'Milad'
      },
      {
        id: 4,
        name: 'Mona7'
      },
      {
        id: 5,
        name: 'Farzad'
      },
      {
        id: 6,
        name: 'Miad'
      },
      {
        id: 7,
        name: 'Mona'
      },
      {
        id: 8,
        name: 'Mona2'
      },
      {
        id: 9,
        name: 'Mona9'
      }
    ];
  }

  public trackByFunc(index: number, el: any) {
    return el.id;
  }

}
