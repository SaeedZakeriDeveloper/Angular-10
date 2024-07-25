import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';
import { tap, map, debounceTime, distinctUntilChanged, switchMap, concatAll } from 'rxjs/operators';

import { AlbumsService } from './albums.service';
import { Album } from './models/album';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public albums$: Observable<Album[]>;

  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;

  constructor(private albumsService: AlbumsService) {}
  
  public ngOnInit() {
    const filteredAlbums$ = fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      debounceTime(300),
      map(event => event as KeyboardEvent),
      map(event => (event.target as HTMLInputElement).value),
      distinctUntilChanged(),
      switchMap(search => this.getAlbums(search)),
      tap(i => console.log(i))
    );

    this.albums$ = of(this.getAlbums(), filteredAlbums$).pipe(concatAll());
  }

  public getAlbums(searchTerm: string = ''): Observable<Album[]> {
    return this.albumsService.getAlbums(searchTerm);
  }

}
