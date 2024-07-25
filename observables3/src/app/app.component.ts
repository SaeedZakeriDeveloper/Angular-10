import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { mockdata } from '../helpers/mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('input', { static: true }) input: ElementRef;
  
  constructor(private http: HttpClient) {}

  public ngOnInit() {

    of(mockdata).subscribe(console.log);

    this.http.get('assets/mockData.json').subscribe(console.log);

    of(['name1', 'name2', 'name3']).subscribe(console.log);
    of('name1', 'name2', 'name3').subscribe(console.log);
    from(['name1', 'name2', 'name3']).subscribe(console.log);

    fromEvent(this.input.nativeElement, 'input').subscribe(console.log);

  }
}
