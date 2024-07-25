import { Component, OnInit } from '@angular/core';
import { concat, from, merge, Observable, of } from 'rxjs';
import { concatAll, concatMap, delay, exhaustMap, map, mergeAll, mergeMap, switchAll, switchMap, tap, toArray } from 'rxjs/operators';

import { Address, User } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public users: User[] = [
    {
      id: 0,
      name: "Foad Shariat"
    },
    {
      id: 1,
      name: "Rezvan Jafari"
    },
    {
      id: 2,
      name: "Miad Jafari"
    },
    {
      id: 3,
      name: "Farzad Rastegar"
    },
    {
      id: 4,
      name: "Milad Jafari"
    },
    {
      id: 5,
      name: "Mona Rastegar"
    }
  ];

  public address: Address[] = [
    {
      userId: 0,
      street: "420 N Krocks Rd",
      country: "USA",
      state: "PA",
      city: "Allentown",
      zipCode: 18106
    },
    {
      userId: 1,
      street: "11 Maplewood Ave",
      country: "USA",
      state: "NJ",
      city: "Maplewood",
      zipCode: 7040
    },
    {
      userId: 2,
      street: "6 Eden St",
      country: "USA",
      state: "MA",
      city: "Natick",
      zipCode: 1760
    },
    {
      userId: 3,
      street: "3836 Jacqueline St",
      country: "USA",
      state: "NY",
      city: "Bethpage",
      zipCode: 11714
    },
    {
      userId: 4,
      street: "212 Foxwood Dr",
      country: "USA",
      state: "KY",
      city: "Nicholasville",
      zipCode: 40356
    },
    {
      userId: 5,
      street: "37 Old Cape Rd",
      country: "USA",
      state: "ME",
      city: "Kennebunkport",
      zipCode: 4046
    }
  ];
  
  public ngOnInit() {

    // const obs1$ = of(1,2).pipe(delay(3000));
    // const obs2$ = of(3,4).pipe(delay(1000));
    // const obs3$ = of(5,6).pipe(delay(2000));

    // const res1$ = of(obs1$, obs2$, obs3$); // Observable<Observable<number>>
    // const res2$ = of(obs1$, obs2$, obs3$).pipe(concatAll()); // Observable<number>

    // const obs4$ = of(of(of(1,2))); // Observable<Observable<Observable<number>>>

    // const res3$ = obs$4.pipe(
    //   mergeMap(n => n),
    //   mergeMap(i => i),
    // ).subscribe(console.log);

    let users$: Observable<Observable<Observable<User[]>>>;
    let address$: Observable<Address[]>;

    users$ = of(of(of(this.users)));

    address$ = users$.pipe(
      mergeMap(users => users),
      mergeMap(users => users),
      mergeMap(users => users),
      mergeMap(user => {
        const add: Observable<Address> = this.getAddress(user.id);
        return add;
      }),
      map(address => {
        return {...address, user: this.users[address.userId].name, active: true}
      }),
      toArray(),
      tap(i => console.log(i)),
    );

  }

  public getAddress(userId: number): Observable<Address> {
    const add = this.address.findIndex(a => a.userId === userId);
    return of(this.address[add]);
  }

}
