import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public patchBodyPost(val) {
    let body = JSON.stringify({
      body: val
    });
    let headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
    let options = { headers: headers };

    return this.http.patch(`https://jsonplaceholder.typicode.com/posts/1`, body, options)
      .pipe(
        delay(2000)
      )
  }
}
