import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CanComponentDeactivate } from '../deactivate.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, CanComponentDeactivate {

  @ViewChild('input') input: ElementRef;

  constructor() { }
  
  ngOnInit(): void {
  }
  
  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.input.nativeElement.value !== '') {
      return confirm('Do you wanna save the value in x service?');
    } else {
      return true;
    }
  }
}
