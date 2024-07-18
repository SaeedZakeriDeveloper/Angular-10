import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UsertableComponent } from './usertable/usertable.component';

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    UsertableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
