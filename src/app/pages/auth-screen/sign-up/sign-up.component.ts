import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule]
})
export class SignUpComponent  implements OnInit {

  // form = new FormGroup ('');
  // username = new FormControl('');
  // email = new FormControl('');
  // password = new FormControl('');
  type = false;

  constructor(private fb: FormBuilder,
    private router: Router
    ) { }


  form = this.fb.group({
    'username': [null, [Validators.required, Validators.minLength(4)]],
    'email': [null, [Validators.required, Validators.email]],
    'password': [null, [Validators.required, Validators.minLength(8)]]
  })

  // constructor() {
  //   this.initForm();
  // }

  ngOnInit() {}

  // initForm(){
  //   this.form = new FormGroup({
  //     username: new FormControl('',[Validators.required, Validators.minLength(2)])
  //   });
  // }

  changeType() {
    this.type = !this.type;
  }

  onSubmit() {
    if(!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
    this.router.navigateByUrl('/home', {replaceUrl: true});
    this.form.reset();
  }

}
