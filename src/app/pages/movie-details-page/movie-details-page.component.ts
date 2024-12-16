import { Component, inject } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details-page',
  standalone: true,
  imports: [],
  templateUrl: './movie-details-page.component.html',
  styleUrl: './movie-details-page.component.scss',
})
export class MovieDetailsPageComponent {
  private movieService = inject(MovieService);
  private route = inject(ActivatedRoute);
  movie!: Movie;

  constructor() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const movieId = Number(params.get('id'));
      this.movieService.getMovieDetails(movieId).subscribe((data) => {
        this.movie = data;
      });
    });
  }
}
