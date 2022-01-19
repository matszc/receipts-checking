import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutContainerRoutingModule } from './layout-container-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';


@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    LayoutContainerRoutingModule
  ]
})
export class LayoutContainerModule { }
