import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  ContentChild,
  ElementRef,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  Input,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @ViewChild('par2', { static: true }) par2: ElementRef;
  @ContentChild('par', { static: true }) par: ElementRef;
  @Input() var1;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges was called');
  }

  ngOnInit(): void {
    console.log('ngOnInit: ' + this.par.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck was called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit: ' + this.par.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked: ' + this.par.nativeElement.textContent);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: ' + this.par2.nativeElement.textContent);
  }
  
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: ' + this.par2.nativeElement.textContent);
  }
  
  ngOnDestroy(): void {
    console.log('Component Destroyed');
  }

  public onChangeViewChild() {
    this.par2.nativeElement.textContent = 'View Child changed!!!';
  }
}
