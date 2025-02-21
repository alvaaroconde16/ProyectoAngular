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

  // Obtener películas mejor valoradas
  getTopRatedMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/top_rated?api_key=${this.apiKey}`, this.getHeaders());
  }

  // Buscar actores por nombre
  searchActors(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/person?query=${query}&api_key=${this.apiKey}`, this.getHeaders());
  }

  // Obtener detalles de la película
  getMovieDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`, this.getHeaders());
  }

  // Obtener reparto de la película
  getMovieCast(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${id}/credits?api_key=${this.apiKey}`, this.getHeaders());
  }

  // Obtener detalles del actor
  getActorDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/person/${id}?api_key=${this.apiKey}`, this.getHeaders());
  }

  // Obtener películas del actor
  getArtistMovies(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/person/${id}/movie_credits?api_key=${this.apiKey}`, this.getHeaders());
  }

  // Buscar series por nombre
  searchSeries(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/tv?query=${query}&api_key=${this.apiKey}`, this.getHeaders());
  }

  // Obtener videos de la película
  getMovieVideos(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${id}/videos?api_key=${this.apiKey}`, this.getHeaders());
  }
}
