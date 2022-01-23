import { Component, OnInit } from '@angular/core';
import {SidebarService} from "../../modules/layout-container/services/sidebar.service";
import {AuthService} from "../../services/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'rc-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss']
})
export class MainBarComponent implements OnInit {

  userAuthorized$: Observable<boolean>;

  constructor(
    public sidebarService: SidebarService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userAuthorized$ = this.authService.checkUser();
  }

}
