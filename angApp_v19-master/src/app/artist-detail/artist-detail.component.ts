import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TmdbService } from '../services/tmdb.service'; // Importa el servicio
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artist-detail',
  imports: [RouterLink,  CommonModule],
  templateUrl: './artist-detail.component.html',
  styleUrl: './artist-detail.component.css'
})
export class ArtistDetailComponent {
  artist: any = {};  //Información para el artista
  artistMovies: any[] = [];  // Películas del artista
  isCollapsed = true;  // Bandera para mostrar/ocultar la biografía

  constructor(private route: ActivatedRoute, private tmdbService: TmdbService) {}

  ngOnInit() {
    // Obtiene el parámetro 'id' de la URL y carga los datos
    this.route.paramMap.subscribe(params => {
      const artistId = params.get('id');  // Obtiene el ID de la URL

      if (artistId) {
        // Obtiene los detalles del artista
        this.tmdbService.getActorDetails(+artistId).subscribe((data) => {
          this.artist = data; // Asigna los detalles del artista
        });

        // Obtiene las películas del artista
        this.tmdbService.getArtistMovies(+artistId).subscribe((data) => {
          this.artistMovies = data.cast.slice(0, 5); // Asigna las películas del artista
        });
      }
    });
  }

  toggleBiography() {
    this.isCollapsed = !this.isCollapsed;
  }
}
