import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {RegisterFormModel} from "../models/register-form.model";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  async signIn({email, password}: RegisterFormModel): Promise<any> {
    return await this.afAuth.createUserWithEmailAndPassword(email, password)
  }
}
