import { Component, OnInit,Input } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MoviesserviceService } from '../service/moviesservice.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-umcom-page',
  templateUrl: './umcom-page.component.html',
  styleUrls: ['./umcom-page.component.css']
})
export class UmcomPageComponent implements OnInit {
  movies: Movie [];
  @Input() movie;
  constructor(private service: MoviesserviceService,
    private route:ActivatedRoute,
    private router:Router ) {}

  ngOnInit() {
    this.service.getUpcommingMovies().subscribe(movies => {
      this.movies = movies;
    });
  }

  async playMovie(movie:Movie){
    let path : string = await this.service.getVideos(movie.id);
    this.router.navigate(['/video-play', path]);
 }
}
