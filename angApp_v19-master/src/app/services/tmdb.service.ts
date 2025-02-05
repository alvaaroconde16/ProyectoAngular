import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiUrl = 'https://api.themoviedb.org/3'; // URL base de la API
  private apiKey = '10e68e8c64b8b1f1344b246c8a6ea806'; // Clave de la API
  private accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMGU2OGU4YzY0YjhiMWYxMzQ0YjI0NmM4YTZlYTgwNiIsIm5iZiI6MTczODMyMTc5Mi4zOSwic3ViIjoiNjc5Y2FmODBhY2FiOTY4YTU4NGQxNzdiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.GunMSS5lCHTYwGBtAilm3twgL_2xnnDamc86PWt5Wgk'; // Token de acceso

  constructor(private http: HttpClient) {}

  // Configurar los headers con el Token de acceso
  private getHeaders() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json'
      })
    };
  }

  // Buscar películas por nombre
  searchMovies(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/movie?query=${query}&api_key=${this.apiKey}`, this.getHeaders());
  }

  // Obtener películas populares
  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`, this.getHeaders());
  }

  getTopRatedMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/top_rated?api_key=${this.apiKey}`, this.getHeaders());
  }
}
