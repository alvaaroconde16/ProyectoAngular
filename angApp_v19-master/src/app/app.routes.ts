import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ContactComponent } from './contact/contact.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { LoginComponent } from './login/login.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'busqueda', component: BusquedaComponent},
    {path: 'movie/:id', component: MovieDetailComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'artist/:id', component: ArtistDetailComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'login', component: LoginComponent},
    {path: 'favorites', component: FavoritesComponent},
    {path: 'register', component: RegisterComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
