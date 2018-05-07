import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Movie } from 'app/interfaces/movie';
import {tvShows} from '../interfaces/tvShows';

interface IMovieData {results: Movie[]; }
export interface IVideoData {results: IVideo[];}
export interface IVideo {'id': string; 'key': string; 'name':string; 'site': string; 'type':string; }

interface ItvData {result: tvShows[]; }
export interface ItvVideoData {results: IVideo[];}
export interface ItvVideo {'id': string; 'key': string; 'name':string; 'site': string; 'type':string; }
@Injectable()
export class MoviesserviceService {
 
  private movies: any;
  private key: string;
  
  constructor(private http:Http) {}
 
  getMovies():Observable <Movie[]>{
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=6866f0c36554b4049063267098d05016')
  .map(function(response){
    return  response.json();
  })
  .map(response=>response.results)
  .map(movies=>{
    return movies.map(movie=>{
      return {
        'id': movie.id,
        'image': "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.poster_path,
        'adult' : movie.adult,
        'original_name':movie.title,
         'overview' : movie.overview,
        'release_date' : movie.release_date,
        'genres' : movie.genres,
        'vote_average' : movie.vote_average,
       'original_language': movie.original_language
      }
    })
  })
  }
  public getUpcommingMovies():Observable <Movie[]>{
    return this.http.get('http://api.themoviedb.org/3/movie/upcoming?api_key=81c50c197b83129dd4fc387ca6c8c323')
  .map(function(response){
    return  response.json();
  })
  .map(response=>response.results)
  .map(movies=>{
    return movies.map(movie=>{
      return {
        'id': movie.id,
        'image': "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.poster_path,
        'adult' : movie.adult,
        'original_name':movie.title,
         'overview' : movie.overview,
        'release_date' : movie.release_date,
        'genres' : movie.genres,
        'vote_average' : movie.vote_average,
       'original_language': movie.original_language
      }
    })
  })
  }

  public getTVshows():Observable < tvShows[]> {
    return this.http.get('https://api.themoviedb.org/3/tv/airing_today?page=1&language=en-US&api_key=6866f0c36554b4049063267098d05016')
  .map(function(response){
    return  response.json();
  })
  .map(response=>response.results)
  .map(movies=>{
    return movies.map(movie=>{
      return {
        'id': movie.id,
        'image': "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.poster_path,
        'adult' : movie.adult,
		'original_name':movie.name,
         'overview' : movie.overview,
        'first_air_date' : movie.first_air_date,
        'genres' : movie.genres,
        'vote_average' : movie.vote_average,
       'original_language': movie.original_language,
	   ' origin_country':movie.origin_country
      }
    })
  })
  }

  getVideo(id:number) : Observable<IVideo>{
    console.log("getvideo1: " + id);
    let video = this.http.get("https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=81c50c197b83129dd4fc387ca6c8c323")
    .map(response => {
      const data : IVideoData = response.json();
      return data.results;}).mergeMap(processArray => {
        return processArray.filter(x=> x.key !== null);
      }).first();
      console.log("video: " + video);
      return video;
}
async getVideos(id:number) : Promise<string>{
  console.log("getvideo1: " + id);
  const response = await this.http.get("https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=81c50c197b83129dd4fc387ca6c8c323").toPromise();
  return response.json().results[0].key;
}

getYouTubePath(id: number): string {
  let path : string = "https://www.youtube.com/embed/"+ JSON.stringify(this.getVideos(id));
  return path;
}

// for tvShows
getTVVideo(id:number) : Observable<ItvVideo>{
  console.log("getvideo1: " + id);
  let video = this.http.get("https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=81c50c197b83129dd4fc387ca6c8c323")
  .map(response => {
    const data : ItvVideoData = response.json();
    return data.results;}).mergeMap(processArray => {
      return processArray.filter(x=> x.key !== null);
    }).first();
    console.log("video: " + video);
    return video;
}
async getTVVideos(id:number) : Promise<string>{
console.log("getvideo1: " + id);
const response = await this.http.get("https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=81c50c197b83129dd4fc387ca6c8c323").toPromise();
return response.json().result[0].key;
}

gettvYouTubePath(id: number): string {
  let path : string = "https://www.youtube.com/embed/"+ JSON.stringify(this.getTVVideos(id));
  return path;
}
// Dla odnogo filma 
getMovie(id:number) {
let info =this.http.get('https://api.themoviedb.org/3/movie/' + id + '?language=en-US&api_key=6866f0c36554b4049063267098d05016');

}
}