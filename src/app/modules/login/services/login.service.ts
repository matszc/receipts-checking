import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {LoginFormModel} from "../models/login-form.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private afAUth: AngularFireAuth
  ) { }

  login({email, password}: LoginFormModel) {
    return this.afAUth.signInWithEmailAndPassword(email, password);
  }
}
