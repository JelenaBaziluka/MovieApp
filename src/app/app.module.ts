import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { UmcomPageComponent } from './umcom-page/umcom-page.component';
import { MoviesserviceService } from './service/moviesservice.service';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { VideoPlayComponent } from './video-play/video-play.component';
import { HoverDirective } from './hover.directive';
import { SearchPipe } from './pipe/search.pipe';
import { MoreInfoComponent } from './home-page/moreinfo/more-info/more-info.component';
import { MoreinfoHomeComponent } from './moreinfo-home/moreinfo-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UmcomPageComponent,
    TvShowsComponent,
    VideoPlayComponent,
    HoverDirective,
    SearchPipe,
    MoreInfoComponent,
    MoreinfoHomeComponent,
   
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
   
  ],
  providers: [MoviesserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
