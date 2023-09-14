import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent  implements OnInit {

  email: string = '';
  password: string = '';

  onSubmit() {
    // Aquí puedes agregar la lógica para autenticar al usuario
    console.log('Correo electrónico:', this.email);
    console.log('Contraseña:', this.password);
    // Puedes usar un servicio de autenticación para verificar las credenciales del usuario
  }

  constructor() {}

  ngOnInit() {}

}
