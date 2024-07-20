import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Switchcase3Component } from './switchcase3.component';

describe('Switchcase3Component', () => {
  let component: Switchcase3Component;
  let fixture: ComponentFixture<Switchcase3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Switchcase3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Switchcase3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
