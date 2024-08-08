import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ResolveGuard } from './resolve.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: AlbumDetailsComponent, 
    data: { message: 'This album is heavy' },
    resolve: { album: ResolveGuard } },
  { path: 'notfound', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
