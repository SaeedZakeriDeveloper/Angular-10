import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public intervalSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {

    const interval$ = interval(1000);

    // document.addEventListener('click', (event) => {
    //   console.log(event);
    // })

    // const interval$ = new Observable((observer: Observer<number>) => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count++);
    //     if (count === 5) {
    //       // observer.error(new Error('We reached 5!'));
    //       // observer.complete();
    //     }
    //   }, 1000);
    // });

    this.intervalSubscription = interval$.subscribe(
      (val) => { console.log(val); },
      (err) => { console.log(err); },
      () => { console.log('Completed'); }
    );

  }

  public ngOnDestroy() {
    this.intervalSubscription.unsubscribe();
  }

}
