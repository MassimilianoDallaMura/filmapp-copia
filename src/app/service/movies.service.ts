import { Injectable } from '@angular/core';
import { Movie } from '../interface/movie.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiURL = environment.apiURL;

    constructor(private http: HttpClient) {}

    getMovies() {
        return this.http.get<Movie[]>(`${this.apiURL}movies`);
    }

    getMovie(id: number) {
        return this.http.get<Movie>(`${this.apiURL}movies/${id}`);
    }

    newMovie(data: Movie) {
        return this.http.post<Movie>(`${this.apiURL}movies`, data);
    }

    updateMovie(id: number, data: Partial<Movie>) {
        return this.http.patch<Movie>(`${this.apiURL}movies/${id}`, data);
    }
}