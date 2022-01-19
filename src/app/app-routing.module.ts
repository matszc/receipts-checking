import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "@angular/fire/auth-guard";

const routes: Routes = [
  {
    path: '', canLoad: [AuthGuard], loadChildren: () => import('./modules/layout-container/layout-container.module').then(m => m.LayoutContainerModule)
  },
  {
    path: 'register', loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'not-found', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: '**', redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
