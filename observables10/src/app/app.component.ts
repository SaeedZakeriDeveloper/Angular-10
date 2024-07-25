import { Component, OnInit } from '@angular/core';
import { defer, from, interval, Observable, of } from 'rxjs';
import { delay, publish, share, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public ngOnInit() {

    // defer(() => {
    // 
    // });

    // const srcObs$ = defer(() => of(Math.random() * 10));
    const srcObs$ = defer(() => from(
      fetch('https://jsonplaceholder.typicode.com/users/1').then((response) => {
      return response.json();
    })));

    const obs1$ = srcObs$.subscribe(console.log);
    const obs2$ = srcObs$.subscribe(console.log);
    const obs3$ = srcObs$.subscribe(console.log);



    // const calc = Math.floor(Math.random() * 10); 

    // const srcObs$ = new Observable(subscriber => {
    //   const calc = Math.floor(Math.random() * 10);
    //   subscriber.next(calc);
    //   subscriber.complete();
    // });

    // const obs1$ = srcObs$.subscribe(console.log);
    // const obs2$ = srcObs$.subscribe(console.log);
    // const obs3$ = srcObs$.subscribe(console.log);  



    // const srcObs$ = interval(1000).pipe(share());

    // const obs1$ = srcObs$.subscribe(val => console.log('first observable: ', val));

    // setTimeout(() => {
    //   const obs2$ = srcObs$.subscribe(val => console.log('second observable: ', val));
    // }, 3000);



    // const srcObs$ = interval(1000);

    // const publish$ = publish()(
    //   srcObs$.pipe(
    //     tap((i) => console.log('published'))
    //   )
    // );

    // const obs1$ = publish$.subscribe(val => console.log('first observable: ', val));
    
    // setTimeout(() => {
    //   const obs2$ = publish$.subscribe(val => console.log('second observable: ', val));
    // }, 7000);

    // setTimeout(() => {
    //   publish$.connect();
    // }, 2000);
    
  }

}
