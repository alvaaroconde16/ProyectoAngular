import { Component } from '@angular/core';
import { Alumnado } from './alumnado-daw';

@Component({
  selector: 'app-alumnado-daw',
  imports: [],
  templateUrl: './alumnado-daw.component.html',
  styleUrl: './alumnado-daw.component.css'
})
export class AlumnadoDAWComponent {
  public titulo = 'Bienvenido Alumnado DAW';
  public alumno: Array<Alumnado>;
  public alumnoPrimero: boolean;


  constructor(){
    this.alumno = [new Alumnado('Juan', 'Garcia', '12345678A', '25/05/1990', 'Madrid', '666666666', 'Primero', ['Programación', 'Bases de Datos', 'Entornos de Desarrollo']),
                  new Alumnado('Alejandro', 'Gonzalez', '87654321B', '15/03/1992', 'Barcelona', '666666666', 'Segundo', ['Programación', 'Bases de Datos', 'Entornos de Desarrollo']),
                  new Alumnado('Ana', 'Martinez', '12345678C', '05/05/1991', 'Valencia', '666666666', 'Primero', ['Programación', 'Bases de Datos', 'Entornos de Desarrollo']),
                  new Alumnado('Maria', 'Lopez', '87654321D', '10/09/1993', 'Sevilla', '666666666', 'Segundo', ['Programación', 'Bases de Datos', 'Entornos de Desarrollo'])];
    
    this.alumnoPrimero = true;
  }

  ngOnInit() {
    console.log(this.alumno);
  }

  cambiarCurso(valor:boolean) {
    this.alumnoPrimero = valor;
  }
}
