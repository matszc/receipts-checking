import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route, Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {map, Observable} from 'rxjs';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkStatus();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkStatus();
  }

  private checkStatus(): Observable<boolean | UrlTree> {
    return this.authService.checkUser().pipe(
      map(v => {
        if (!v) {
          return this.router.createUrlTree(['login']);
        }
        return v;
      })
    )
  }

}
