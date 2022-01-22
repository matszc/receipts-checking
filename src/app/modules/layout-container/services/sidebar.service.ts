import { Injectable } from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {BehaviorSubject, map, Observable, Subject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  isMobile$: Observable<boolean>
  opened: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    this.isMobile$ = breakpointObserver.observe(Breakpoints.HandsetPortrait).pipe(
      map(({matches}) => matches),
      tap((v) => {
        this.toggleMenu(!v);
      })
    )
  }

  toggleMenu(state?: boolean) {
    this.opened = state ?? !this.opened;
  }
}
