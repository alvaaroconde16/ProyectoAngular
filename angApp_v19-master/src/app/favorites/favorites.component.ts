import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites',
  imports: [RouterLink],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  favoriteMovies: any[] = [];

  constructor() {
    this.loadFavorites();
  }

  // Cargar las películas favoritas desde LocalStorage
  loadFavorites() {
    if (typeof window !== 'undefined' && localStorage) {
      const storedFavorites = localStorage.getItem('favorites');
      this.favoriteMovies = storedFavorites ? JSON.parse(storedFavorites) : [];
    } else {
      console.error('LocalStorage no disponible');
    }
  }

  // Eliminar una película de favoritos
  removeFromFavorites(movieId: number) {
    this.favoriteMovies = this.favoriteMovies.filter(movie => movie.id !== movieId);
    localStorage.setItem('favorites', JSON.stringify(this.favoriteMovies));
  }
}
