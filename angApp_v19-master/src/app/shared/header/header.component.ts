import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  buscar() {
    if (this.searchQuery) {
      this.router.navigate(['/busqueda'], { queryParams:  { q: this.searchQuery }});
    }
  }
}
