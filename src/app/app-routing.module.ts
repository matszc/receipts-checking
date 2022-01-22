import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UnauthorizedGuard} from "./guards/unauthorized.guard";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: '', canLoad: [AuthGuard], loadChildren: () => import('./modules/layout-container/layout-container.module').then(m => m.LayoutContainerModule),
    pathMatch: 'full'
  },
  {
    path: 'register', canLoad: [UnauthorizedGuard], loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'login', canLoad: [UnauthorizedGuard], loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'not-found', canLoad: [UnauthorizedGuard], loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)
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
