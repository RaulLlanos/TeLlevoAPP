import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertController, IonicModule} from '@ionic/angular';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, ResetPasswordComponent]
})
export class SignInComponent  implements OnInit {

  // form = new FormGroup ('');
  // email = new FormControl('', [Validators.required, Validators.email]);
  // password = new FormControl('');

  type = true;
  isLoading!: boolean;


  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController
    ) { }

  form = this.fb.group({
    'email': [null, [Validators.required, Validators.email]],
    'password': [null, [Validators.required, Validators.minLength(8)]]
  })

  changeType() {}

  onSubmit() {
    if(!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    // console.log(this.form.value);
    // this.authService.login(this.form.value).then((data) => {
    //   console.log(data);
    //   this.router.navigateByUrl('/tabs', {replaceUrl: true});
    //   this.isLoading = false;
    //   this.form.reset();
    // })
    // .catch(e => {
    //   console.log(e);
    //   this.isLoading = false;
    //   let msg = 'Could not sign you in, please try again';
    //   if(e.code == 'auth/user-not-found') {
    //     msg = 'Email Id could not be found';
    //   } else if(e.code == 'auth/wrong-password') {
    //     msg = 'Please enter correct password';
    //   }
    //   this.showAlert(msg);
    // });
  }
//     if(!this.form.valid) {
//       this.form.markAllAsTouched();
//       return;
//     }
//     console.log(this.form.value);
//     this.router.navigateByUrl('/home', {replaceUrl: true});
// }

  ngOnInit() {}


  reset(event: any) {

  }
}
