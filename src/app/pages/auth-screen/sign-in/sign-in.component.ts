import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
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
