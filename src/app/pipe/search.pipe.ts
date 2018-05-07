import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies: any, searchStr?: any): any {
  
    if (searchStr === undefined) return movies;
    return movies.filter(function(movie){
      return movie.name.includes(searchStr)
    })
  }

}
