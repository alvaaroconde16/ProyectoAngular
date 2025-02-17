import { Component } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  topRatedMovies: any[] = [];
  popularMovies: any[] = [];

  constructor(private tmdbService: TmdbService) {
    this.loadPopularMovies(); // Llamamos la función al iniciar
    this.loadTopRatedMovies();
  }

  // Cargar las películas mejor puntuadas
  loadTopRatedMovies(): void {
    this.tmdbService.getTopRatedMovies().subscribe(response => {
      this.topRatedMovies = response.results; // Guardamos las películas en la variable
    });
  }

  // Función para cargar las películas populares
  loadPopularMovies(): void {
    this.tmdbService.getPopularMovies().subscribe(response => {
      this.popularMovies = response.results.slice(0, 14); // Solo mostramos las 10 primeras películas
    });
  }
}
