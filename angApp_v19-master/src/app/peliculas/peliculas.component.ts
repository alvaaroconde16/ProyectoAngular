import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-peliculas',
  imports: [RouterModule, FormsModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  searchMovies: any[] = [];
  searchActors: any[] = [];
  searchSeries: any[] = [];
  query: string = '';
  filtroSeleccionado: string = 'peliculas'; // Por defecto, se muestran películas
  sortOrder: string = 'asc'; // Ordenar por popularidad descendente

  constructor(private route: ActivatedRoute, private router: Router, private tmdbService: TmdbService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'];

      if (this.query) {
        this.buscar();
      }
    });
  }

  buscar() {
    if (!this.query.trim()) return; // Evitar búsquedas vacías

    // Actualizar la URL con la nueva búsqueda
    this.router.navigate([], { queryParams: { q: this.query }});

    this.tmdbService.searchMovies(this.query).subscribe(response => {
      this.searchMovies = response.results;
    });

    this.tmdbService.searchActors(this.query).subscribe(response => {
      this.searchActors = response.results.splice(0, 8);
    });

    this.tmdbService.searchSeries(this.query).subscribe(response => {
      this.searchSeries = response.results;
    });
  }


  // Función para ordenar los resultados de películas y actores
  ordenarResultados() {
    if (this.filtroSeleccionado === 'peliculas') {
      this.searchMovies.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        if (this.sortOrder === 'asc') {
          return titleA.localeCompare(titleB);  // Comparar de A a Z
        } else {
          return titleB.localeCompare(titleA);  // Comparar de Z a A
        }
      });
    }

    if (this.filtroSeleccionado === 'actores') {
      this.searchActors.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (this.sortOrder === 'asc') {
          return nameA.localeCompare(nameB);  // Comparar de A a Z
        } else {
          return nameB.localeCompare(nameA);  // Comparar de Z a A
        }
      });
    }
  }

  
  // Alternar entre orden ascendente y descendente
  toggleSort() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.ordenarResultados(); // Ordenar los resultados después de cambiar el orden
  }
}
