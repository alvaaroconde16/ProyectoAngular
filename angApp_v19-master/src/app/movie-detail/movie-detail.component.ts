import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TmdbService } from '../services/tmdb.service'; // Importa el servicio
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser'; // Importa DomSanitizer

@Component({
  selector: 'app-movie-detail',
  imports: [RouterLink, CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  movie: any = {};  //Información para la película
  cast: any[] = []; //Reparto
  sanitizedVideoUrl: any; //URL del vídeo de la película
  popularMovies: any[] = []; //Películas populares

  constructor(private route: ActivatedRoute, private tmdbService: TmdbService, private sanitizer: DomSanitizer) {
    
    // Obtiene el parámetro 'id' de la URL y carga los datos
    this.route.paramMap.subscribe(params => {
      const movieId = params.get('id');  // Obtiene el ID de la URL

      if (movieId) {
        // Obtiene los detalles de la película
        this.tmdbService.getMovieDetails(+movieId).subscribe((data) => {
          this.movie = data; // Asigna los detalles de la película
        });

        // Obtiene el reparto de la película
        this.tmdbService.getMovieCast(+movieId).subscribe((data) => {
          this.cast = data.cast ? data.cast.slice(0, 10) : []; // Asigna los primeros 10 actores
        });

        // Obtiene el vídeo de la película
        this.tmdbService.getMovieVideos(+movieId).subscribe((data) => {
          if (data.results && data.results.length) {
            const videoUrl = `https://www.youtube.com/embed/${data.results[0].key}`;
            this.sanitizedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);  // Sanitiza la URL
          }
        });

        // Obtiene las películas populares
        this.tmdbService.getPopularMovies().subscribe((data) => {
          this.popularMovies = data.results.slice(0, 6); // Asigna las primeras 6 películas
        });
      }
    });
  }


  // Función para verificar si una película está en favoritos
  isFavorite(movieId: string): boolean {
    if (typeof window !== 'undefined' && localStorage) {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      return favorites.some((movie: any) => movie.id === movieId);
    }
    return false; // Si no estamos en un navegador, devolvemos falso
  }
  
  
  // Función para añadir o quitar una película de favoritos
  toggleFavorite(movie: any): void {
    if (typeof window !== 'undefined' && localStorage) {
      let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      
      if (this.isFavorite(movie.id)) {
        favorites = favorites.filter((fav: any) => fav.id !== movie.id);
      } else {
        favorites.push(movie);
      }
  
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }
}
