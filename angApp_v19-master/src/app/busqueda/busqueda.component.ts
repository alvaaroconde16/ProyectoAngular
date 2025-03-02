import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TmdbService } from '../services/tmdb.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  imports: [RouterModule, FormsModule],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  searchMovies: any[] = [];
  searchActors: any[] = [];
  query: string = '';
  filtroSeleccionado: string = 'peliculas'; //por defecto se muestran ambos resultados

  //ActivatedRoute es un servicio que nos permite acceder a los parámetros de la URL.
  constructor(private route: ActivatedRoute, private tmdbService: TmdbService) {}

  ngOnInit() {

    //Esto lo usamos para obtener los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      this.query = params['q'];

      if (this.query) {
        this.tmdbService.searchMovies(this.query).subscribe(response => {
          this.searchMovies = response.results;
        });

        this.tmdbService.searchActors(this.query).subscribe(response => {
          this.searchActors = response.results.splice(0,8);
        });
      }
      
    });
  }
}
