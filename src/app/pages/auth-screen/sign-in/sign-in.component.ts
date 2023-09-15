import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, IonicModule]
})
export class SignInComponent  implements OnInit {

  form = new FormGroup ('');
  email = new FormControl('');
  password = new FormControl('');
  type = true;


  ngOnInit() {}

  changeType() {
  }

  onSubmit() {

  }

}
