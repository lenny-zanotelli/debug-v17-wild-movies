import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie.model';

import { MovieService } from '../../services/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-thumbnail',
  standalone: true,
  imports: [],
  templateUrl: './movie-thumbnail.component.html',
  styleUrl: './movie-thumbnail.component.scss',
})
export class MovieThumbnailComponent {
  private movieService = inject(MovieService);
  private router: Router = inject(Router);
  @Input() movie!: Movie;
  @Input() isFavorite: boolean = false;
  @Output() toggleFavorite = new EventEmitter<void>();

  ngOnInit() {
    this.isFavorite = this.movieService.isFavorite(this.movie.id);
  }

  onToggleFavorite() {
    this.toggleFavorite.emit();
  }

  navigateToDetails(id: number) {
    this.router.navigate(['/movies', id]);
  }
}
