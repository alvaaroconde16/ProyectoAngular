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
  isLoggedIn: boolean = false;
  username: string = '';

  constructor(private router: Router) {}
  
  ngOnInit() {
    // Verificar si el usuario está logueado
    if (typeof window !== 'undefined' && localStorage) {
      this.isLoggedIn = localStorage.getItem('isLoggedIn') == 'true';
      this.username = localStorage.getItem('username') || '';
    }
  }

  buscar() {
    if (this.searchQuery) {
      this.router.navigate(['/busqueda'], { queryParams:  { q: this.searchQuery }}); //se envía el valor de searchQuery como un parámetro en la URL (q=busqueda)
      this.searchQuery = ''; //se limpia el campo de búsqueda
    }
  }

  logout() {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem('isLoggedIn', 'false'); //se cambia el estado de isLoggedIn a false
      this.isLoggedIn = false; //se cambia el estado de isLoggedIn a false
    }
  }
}
