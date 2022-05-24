import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ { path: '', redirectTo: '/update', pathMatch: 'full' },
{ path: 'update', loadChildren: () => import('./update-form/update-form.module').then(m => m.UpdateFormModule) },
/*  { path: 'update', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
{ path: 'about-us', loadChildren: () => import('./components/about-us/about-us.module').then(m => m.AboutUsModule) } */];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
