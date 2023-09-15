import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, ResetPasswordComponent]
})
export class SignInComponent  implements OnInit {

  form = new FormGroup ('');
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('');
  type = true;

  constructor() { }

  ngOnInit() {}

  changeType() { }

  onSubmit() { }

}
