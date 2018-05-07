import { Component, OnInit } from '@angular/core';
import {Movie} from '../interfaces/movie';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { MoviesserviceService } from '../service/moviesservice.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-moreinfo-home',
  templateUrl: './moreinfo-home.component.html',
  styleUrls: ['./moreinfo-home.component.css']
})
export class MoreinfoHomeComponent implements OnInit {
 movie: Movie;

  constructor(private service: MoviesserviceService,
    private route: ActivatedRoute,
    private router: Router) {
      
     }

  ngOnInit(){
    this.route.params
    .switchMap((params:Params)=>this.service.getMovie(+params['id']))
    .subscribe(movie=>this.movie=movie);
  
  }

  public onSelect(movie : Movie){
    this.router.navigate(['/movie-detail', movie.id]);
}


}
