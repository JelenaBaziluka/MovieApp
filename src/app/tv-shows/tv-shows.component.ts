import { Component, OnInit, Input } from '@angular/core';
import { MoviesserviceService } from '../service/moviesservice.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {tvShows} from '../interfaces/tvShows';
@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {
  movies: tvShows [];
  @Input() movie;
    constructor(private service: MoviesserviceService,
                private route:ActivatedRoute,
                private router:Router ) {}

  ngOnInit() {
    this.service.getTVshows().subscribe(movies=>{
      this.movies = movies;

  });
  }
  async playMovie(movie:tvShows){
    let path : string = await this.service.getTVVideos(movie.id);
    this.router.navigate(['/video-play', path]);
 }
}
