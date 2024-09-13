import { Component, Optional } from '@angular/core';
import { MyCompanyService } from './my-company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(@Optional() private myCompanyService: MyCompanyService) {}

  title = 'servicesInDeep';
}
