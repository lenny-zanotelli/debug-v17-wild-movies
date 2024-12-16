import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private http = inject(HttpClient);
  private options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: environment.apiKey,
    },
  };

  private favorites: Movie[] = [];

  // Récupérer les films populaires
  getPopularMovies(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/movie/popular`, this.options);
  }

  getMovieDetails(id: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}/movie/${id}`, this.options);
  }

  // Rechercher des films par titre
  searchMovies(query: string): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}/search/movie?query=${query}`,
      this.options
    );
  }

  addToFavorites(movie: Movie) {
    if (!this.isFavorite(movie.id)) {
      this.favorites.push(movie);
    }
  }

  removeFromFavorites(movieId: number) {
    this.favorites = this.favorites.filter((movie) => movie.id !== movieId);
  }

  isFavorite(movieId: number): boolean {
    return this.favorites.some((movie) => movie.id === movieId);
  }

  getFavorites(): Movie[] {
    return this.favorites;
  }
}
