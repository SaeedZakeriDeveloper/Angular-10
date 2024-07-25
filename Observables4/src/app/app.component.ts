import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, tap, take, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('input', { static: true }) input: ElementRef;
  
  public ngOnInit() {

    fromEvent(this.input.nativeElement, 'input').pipe(
      map(event => event as InputEvent),
      map(item => (item.target as HTMLInputElement).value),
    ).subscribe(console.log);

    // fromEvent(document, 'click').pipe(
    //   map(event => event as MouseEvent),
    //   map(item => {
    //     return {
    //       x: item.offsetX,
    //       y: item.offsetY
    //     }
    //   }),
    //   // take(5),
    //   takeWhile(item => item.x < 1000),
    //   tap(i => console.log(i)),
    //   ).subscribe();
  }

}
