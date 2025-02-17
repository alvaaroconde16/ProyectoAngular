import { Component } from '@angular/core';
import { FormsModule, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public contactForm: FormGroup;
  
  // nombre: string = '';
  // email: string = '';
  // mensaje: string = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mensaje: new FormControl('', Validators.required, )
    });
  }

  // Función para enviar el correo (abre el gestor de correos del usuario)
  enviarCorreo() {

    const correoDestinatario = 'themoviedb@gmail.com'
    const asunto = 'Formulario de Contacto';
    const datosFormulario = this.contactForm.value;
    const mailto = `mailto:${correoDestinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(`Nombre: ${datosFormulario.nombre} \nApellidos: ${datosFormulario.apellidos}\nTeléfono: ${datosFormulario.telefono}\nCorreo: ${datosFormulario.email} \nMensaje: ${datosFormulario.mensaje}`)}`;

    window.location.href = mailto;

    // const correoDestinatario = 'themoviedb@gmail.com';  // Aquí pondrías tu correo
    // const asunto = 'Formulario de Contacto';
    // const cuerpo = `Nombre: ${this.nombre}\nCorreo: ${this.email}\n\nMensaje: ${this.mensaje}`;

    // Abre el gestor de correo del usuario con los datos predefinidos
    // window.location.href = `mailto:${correoDestinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

    // Limpiar los campos después de enviar
    // this.nombre = '';
    // this.email = '';
    // this.mensaje = '';
  }
}
