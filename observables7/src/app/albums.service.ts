import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  public getAlbums(searchTerm: string = ''): Observable<Album[]> {
    return this.http.get<Album[]>(`api/albums?searchTerm=${searchTerm}`);
  }

}
