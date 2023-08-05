import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)}, 
  { path: 'create-user', loadChildren: () => import('./pages/user/create/create.module').then(m => m.CreateModule) },
  { path: 'show-user', loadChildren: () => import('./pages/user/show/show.module').then(m => m.ShowModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
