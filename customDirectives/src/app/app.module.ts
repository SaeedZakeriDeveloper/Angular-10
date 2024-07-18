import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorfulDirective } from './colorful.directive';
import { AppHighlightDirective } from './app-highlight.directive';
import { CarouselDirective } from './carousel.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorfulDirective,
    AppHighlightDirective,
    CarouselDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
