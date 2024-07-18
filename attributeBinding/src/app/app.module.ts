import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Switchcase1Component } from './switchcase1/switchcase1.component';
import { Switchcase2Component } from './switchcase2/switchcase2.component';
import { Switchcase3Component } from './switchcase3/switchcase3.component';
import { Switchcase4Component } from './switchcase4/switchcase4.component';

@NgModule({
  declarations: [
    AppComponent,
    Switchcase1Component,
    Switchcase2Component,
    Switchcase3Component,
    Switchcase4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
