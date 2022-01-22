import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutContainerComponent} from "./components/layout-container/layout-container.component";

const routes: Routes = [{path: '', component: LayoutContainerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutContainerRoutingModule {
}
