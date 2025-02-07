import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-busqueda',
  imports: [],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  searchResults: any[] = [];
  query: string = '';

  constructor(private route: ActivatedRoute, private tmdbService: TmdbService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'];

      if (this.query) {
        this.tmdbService.searchMovies(this.query).subscribe(response => {
          this.searchResults = response.results;
        });
      }
      
    });
  }
}
