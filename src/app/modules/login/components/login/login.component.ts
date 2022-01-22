import { Component, OnInit } from '@angular/core';
import {LoginFormModel} from "../../models/login-form.model";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'rc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async signIn(form: LoginFormModel) {
    await this.loginService.login(form);
    await this.router.navigate([''])
  }

}
