import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ResetPasswordComponent  implements OnInit {

  email: any
  model: any = {
    email: '',
    new_password: ''
  };
  flag: number | undefined;
  // Nose aun que flag usar ...
  // flag!: number;

  constructor(
    public authService: AuthService,
    public route: Router
    ) { }

  ngOnInit() {}

  getData() {
    let data: any = {};
    if(this.model?.email == '' && this.model?.new_password == '') {
      data = {
        title: 'Forgot password',
        subTitle: 'Enter your email for the verification process.',
        button: 'VERIFY'
      };
      this.flag = 1;
    } else {
      data = {
        title: 'Reset password',
        subTitle: 'Enter your new password, must be atleast 8 characters long.',
        button: 'SAVE'
      };
      this.flag = 2;
    }
    console.log(data);
    return data;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.model = {
      email: form.value.email || '',
      new_password: form.value.new_password || ''
    };
  }

  async resetPassword(){
    this.authService.resetPassword(this.email).then(()=>{
      console.log('reset link sent')
      this.route.navigate(['/landing'])
    }

    ).catch((error)=>{
      console.log(error);
    })
  }

}
