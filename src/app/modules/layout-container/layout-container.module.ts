import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutContainerRoutingModule } from './layout-container-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { LayoutContainerComponent } from './components/layout-container/layout-container.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    SideMenuComponent,
    LayoutContainerComponent,
  ],
  imports: [
    CommonModule,
    LayoutContainerRoutingModule,
    MatSidenavModule,
    MatListModule,
  ]
})
export class LayoutContainerModule { }
