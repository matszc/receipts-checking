import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, Observable} from "rxjs";
import {MenuItemModel} from "../../models/menu-item.model";
import {SidebarService} from "../../services/sidebar.service";

@Component({
  selector: 'rc-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  menuItems: MenuItemModel[];

  constructor(
    public sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
    this.loadMenu();
  }

  private loadMenu() {
    this.menuItems = [
      {
        label: 'Podsumowanie',
        url: '/',
      },
      {
        label: 'Kategorie',
        url: '/',
      },
      {
        label: 'Dodaj rachunek',
        url: '/'
      }
    ]
  }
}
