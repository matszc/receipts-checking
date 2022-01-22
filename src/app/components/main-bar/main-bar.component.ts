import { Component, OnInit } from '@angular/core';
import {SidebarService} from "../../modules/layout-container/services/sidebar.service";

@Component({
  selector: 'rc-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss']
})
export class MainBarComponent implements OnInit {

  constructor(
    public sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
  }

}
