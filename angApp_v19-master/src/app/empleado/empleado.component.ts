import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})

export class EmpleadoComponent {
  public titulo = 'Bienvenido Empleado';
  public empleado: Empleado;

  constructor() {
    this.empleado = new Empleado('Juan', 45);
  }

  ngOnInit() {
    console.log(this.empleado);
  }
}
