import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-busqueda',
  imports: [RouterModule],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  searchMovies: any[] = [];
  searchActors: any[] = [];

  query: string = '';

  constructor(private route: ActivatedRoute, private tmdbService: TmdbService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'];

      if (this.query) {
        this.tmdbService.searchMovies(this.query).subscribe(response => {
          this.searchMovies = response.results;
        });

        this.tmdbService.searchActors(this.query).subscribe(response => {
          this.searchActors = response.results.splice(0,5);
        });
      }
      
    });
  }
}
