import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'busqueda', component: BusquedaComponent},
    {path: 'movie/:id', component: MovieDetailComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
