import { Component } from '@angular/core';
import { FormsModule, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public contactForm: FormGroup;
  public enviado:boolean = false;
  public error:boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mensaje: new FormControl('', Validators.required, )
    });
  }

  // Función para enviar correo con EmailJS
  enviarCorreo() {
    if (this.contactForm.invalid) {
      return;
    }

    const serviceID = 'service_7crj7xl'; // Reemplázalo con tu Service ID de EmailJS
    const templateID = 'template_kuknxi8'; // Reemplázalo con tu Template ID
    const publicKey = '0UO22aaOq-XuKVrjl'; // Reemplázalo con tu Public Key

    const datosFormulario = this.contactForm.value;

    const templateParams = {
      nombre: datosFormulario.nombre,
      apellidos: datosFormulario.apellidos,
      telefono: datosFormulario.telefono,
      email: datosFormulario.email,
      mensaje: datosFormulario.mensaje
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        this.enviado = true;
        this.error = false;
        this.contactForm.reset(); // Limpiar el formulario
      })
      .catch(() => {
        this.enviado = false;
        this.error = true;
      });
  }
}
