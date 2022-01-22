import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router, UrlTree} from "@angular/router";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  async logout() {
    await this.afAuth.signOut()
    return await this.router.navigate(['login']);
  }

  checkUser(): Observable<boolean> {
    return this.afAuth.user.pipe(
      map(v => {
        return v?.emailVerified ?? false
      })
    )
  }
}
