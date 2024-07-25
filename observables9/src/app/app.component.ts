import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, from, interval, merge, Observable, of, pipe, throwError, timer, zip } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // public x!: boolean; // definite assignment assertion 
  // public x: boolean;

  constructor(private userService: UserService, private http: HttpClient) {}
  
  ngOnInit() {

    let obs1$ = of('3252352', 'Crucial', '12/21');
    let obs2$ = of('4574574', 'LG', '10/21');
    let obs3$ = of('7090000', 'Dell', '05/21');

    zip(obs1$, obs2$, obs3$).subscribe(console.log);

    // let name$ = of('Foad', 'Rezvan', 'Ferion');
    // let food$ = of('seafood', 'Hamburger', 'Pizza');
    // let drink$ = of('Water', 'Cola', 'Energy Drink');

    // zip(name$,food$,drink$)
    // .pipe(
    //   map(([name, food, drink]) => {
    //     return {name, food, drink}
    //   })
    // ).subscribe(console.log);

    // let arrObs$: Observable<any>[] = [];

    // for (let i = 0; i < 11; i++) {
    //   arrObs$.push(this.userService.getUser(i).pipe(catchError(err => of(err))));
    // }

    // forkJoin(arrObs$).subscribe(console.log);

    // forkJoin({
    //   foo: of(1, 2, 3, 4),
    //   bar: Promise.resolve(8),
    //   baz: timer(4000),
    //   // ban: throwError(3412352)
    //   // ban: interval(1000).pipe(take(3))
    // }).subscribe(val => console.log('with object: ', val));

    // forkJoin([
    //   of(1, 2, 3, 4),
    //   Promise.resolve(8),
    //   timer(4000),
    // ]).subscribe(val => console.log('with array: ', val));

    // merge(
    //   of(1, 2, 3, 4),
    //   Promise.resolve(8),
    //   timer(4000),
    // ).subscribe(val => console.log('with merge: ', val));

    // const dynamicApiPath$ = (...args) => {
    //   return forkJoin(args.map(arg => this.http.get(arg)));
    // }

  }

}
