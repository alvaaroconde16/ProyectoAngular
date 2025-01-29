import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  imports: [EmpleadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angApp_v19';
}
