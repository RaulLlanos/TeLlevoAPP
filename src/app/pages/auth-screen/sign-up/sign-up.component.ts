import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent  implements OnInit {

  form = new FormGroup ('');
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  type = false;

  constructor() { }

  ngOnInit() {}

}
