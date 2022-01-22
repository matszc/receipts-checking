import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../../services/register.service";
import {RegisterFormModel} from "../../models/register-form.model";

@Component({
  selector: 'rc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private registerService: RegisterService
  ) { }

  ngOnInit(): void {
  }

  register(form: RegisterFormModel) {
    this.registerService.signIn(form).then(v => {
      console.log(v);
    })
  }

}
