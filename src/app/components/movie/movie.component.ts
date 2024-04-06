import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interface/movie.interface';
import { MoviesService } from 'src/app/service/movies.service';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  movies!: Movie[];
 

constructor(private movieSrv: MoviesService,) {}


ngOnInit(): void {
  console.log('ngOnInit attivato');
        this.movieSrv.getMovies().subscribe((data) => {
            this.movies = data;
        });
    }  
  }