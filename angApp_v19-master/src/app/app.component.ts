import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoComponent } from "./empleado/empleado.component";
import { AlumnadoDAWComponent } from './alumnado-daw/alumnado-daw.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angApp_v19';
}

