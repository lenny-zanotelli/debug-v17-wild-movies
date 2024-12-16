import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-list-page',
  standalone: true,
  imports: [],
  templateUrl: './movie-list-page.component.html',
  styleUrl: './movie-list-page.component.scss'
})
export class MovieListPageComponent implements OnInit {
  movies: Movie[] = [];
  searchQuery: string = '';

  ngOnInit() {
  }

  loadPopularMovies() {
    this.movieService.getPopularMovies().subscribe((data: any) => {
      this.movies = data;
    });
  }

  searchMovies() {
    if (this.searchQuery.trim()) {
      this.movieService.searchMovies(this.searchQuery).subscribe((data: any) => {
        this.movies = data;
      });
    } else {
      this.loadPopularMovies();
    }
  }

  toggleFavorite(movie: Movie) {
    if (this.movieService.isFavorite(movie.id)) {
      this.movieService.removeFromFavorites(movie.id);
    } else {
      this.movieService.addToFavorites(movie);
    }
  }

  isFavorite(movieId: number): boolean {
    return this.movieService.isFavorite(movieId);
  }
}
