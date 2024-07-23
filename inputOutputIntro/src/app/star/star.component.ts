import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input('starRating') rating: number = 3.5;
  @Output('starEventEmitter') starClicked = new EventEmitter<number>();
  width: number = 90;

  constructor() { }

  ngOnInit(): void {
    this.width = this.rating * 90 / 5;
  }

  public onClick() {
    this.starClicked.emit(this.rating);
  }

}
