import { NgModule } from '@angular/core';
import { BaseComponent } from './base.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    BaseComponent,
    CardComponent
  ],
  imports: [
  ],
  exports: [
    BaseComponent
  ]
})
export class BaseModule { }
