import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { UmcomPageComponent } from '../umcom-page/umcom-page.component';
import { TvShowsComponent } from '../tv-shows/tv-shows.component';
import { VideoPlayComponent } from '../video-play/video-play.component';
import { MoreInfoComponent } from '../home-page/moreinfo/more-info/more-info.component';
const appRoutes: Routes =[
  {path: 'movies', component: HomePageComponent},
  {path: 'upcomming', component: UmcomPageComponent },
  {path: 'tvShows', component: TvShowsComponent },
  { path: 'video-play/:path', component: VideoPlayComponent },
  {path: 'movie-detail/:id', component: MoreInfoComponent},
  {path: '',   redirectTo: '/movies', pathMatch: 'full' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
