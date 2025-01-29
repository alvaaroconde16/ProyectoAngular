import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})

export class EmpleadoComponent {
  public title = "Bienvenido Empleado";
  public empleado:Empleado;
  //public empleados:Array<Empleado> = [];

  constructor(){
    this.empleado = new Empleado("Pedro", 47, "Jefe", true);
  }
  ngOnInit(){
    console.log(this.empleado);
  }
}
