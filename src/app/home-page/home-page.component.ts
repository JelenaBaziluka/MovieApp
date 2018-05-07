import { Component, OnInit,Input } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MoviesserviceService } from '../service/moviesservice.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchPipe } from '../pipe/search.pipe';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [MoviesserviceService],

})
export class HomePageComponent implements OnInit {
 movies: Movie [];
 searchStr = '';
@Input() movie;
  constructor(private service: MoviesserviceService,
              private route:ActivatedRoute,
              private router:Router ) {}
  ngOnInit() {
    this.service.getMovies().subscribe(movies=>{
      this.movies = movies;
    });
 }
 async playMovie(movie:Movie){
  let path : string = await this.service.getVideos(movie.id);
  this.router.navigate(['/video-play', path]);
}
public onSelect(movie : Movie){
  this.route.params.subscribe(params=>{
    this.router.navigate(['movie/:id', movie.id])
    this.service.getMovie(params['id'])
    .subscribe(movie=>{
      this.movie= movie;
    });
  })
  
}
 }
