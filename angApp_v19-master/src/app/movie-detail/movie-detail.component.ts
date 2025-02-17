import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TmdbService } from '../services/tmdb.service'; // Importa el servicio

@Component({
  selector: 'app-movie-detail',
  imports: [RouterLink],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  movie: any = {};  //Información para la película
  cast: any[] = []; //Reparto

  constructor(private route: ActivatedRoute, private tmdbService: TmdbService) {
    
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
      }
    });
  }
}
