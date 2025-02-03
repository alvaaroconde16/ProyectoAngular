import { Component } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  popularMovies: any[] = [];

  constructor(private tmdbService: TmdbService) {
    this.loadPopularMovies(); // Llamamos la función al iniciar
  }

  // Función para cargar las películas populares
  loadPopularMovies(): void {
    this.tmdbService.getPopularMovies().subscribe(response => {
      this.popularMovies = response.results.slice(0, 12); // Solo mostramos las 10 primeras películas
    });
  }
}
