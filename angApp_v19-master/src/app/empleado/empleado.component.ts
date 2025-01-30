import { Component } from '@angular/core';
import { Empleado } from './empleado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleado',
  imports: [CommonModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})

export class EmpleadoComponent {
  public titulo = 'Bienvenido Empleado';
  public empleado: Empleado;
  public trabajador: Array<any>;
  public trabajadorExterno: boolean;

  constructor() {
    this.empleado = new Empleado('Juan', 45, true);
    this.trabajador = [new Empleado('Alejandro', 22, true), 
                      new Empleado('Ana', 25, false), 
                      new Empleado('Maria', 35, true)];
    
    this.trabajadorExterno = true;
  }

  ngOnInit() {
    console.log(this.empleado);
  }

  cambiarExterno(valor:boolean) {
    this.trabajadorExterno = valor;
  }
}
