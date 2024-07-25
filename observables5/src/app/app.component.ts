import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, of } from 'rxjs';
import { filter, tap, map, delay, concatMap } from 'rxjs/operators';
import { User } from './models/app-model';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('input', { static: true }) input: ElementRef;

  constructor(private userService: UsersService) {}

  users: User[] = [
    {
      name: 'Foad',
      age: 40,
      status: 'active'
    },
    {
      name: 'Rezvan',
      age: 30,
      status: 'active'
    },
    {
      name: 'Ferion',
      age: 28,
      status: 'inactive'
    },
    {
      name: 'Miad',
      age: 32,
      status: 'inactive'
    },
  ];
  
  public ngOnInit() {

    fromEvent(this.input.nativeElement, 'input').pipe(
      map(event => event as InputEvent),
      map(item => (item.target as HTMLInputElement).value),
      concatMap(item => this.userService.patchBodyPost(item)),
      tap(i => console.log(i)),
    ).subscribe();

    // of(1,2,3,4,5,6,7,8,9).subscribe(val => {

    //   let body = JSON.stringify({
    //     body: 'Test123',
    //     title: 'Test Title'
    //   });

    //   let headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    //   let options = { headers: headers }

    //   this.http.patch(`https://jsonplaceholder.typicode.com/posts/${val}`, body, options)
    //     .subscribe(console.log);
    // });



    // from(this.users).pipe(
    //   filter(user => user.status === 'active')
    // ).subscribe(console.log);
  }

}
