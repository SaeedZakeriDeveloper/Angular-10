import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public onUserLogin(event: Event, email: string, password: string) {
    event.preventDefault();
    if (email === 'Foad@foad.com' && password === '123') {
      this.authService.login();
    } else {
      this.router.navigate(['/notAuthorized']);
    }
  }

}
