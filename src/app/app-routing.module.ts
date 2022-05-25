import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ { path: '', redirectTo: '/grid', pathMatch: 'full' },
{ path: 'update', loadChildren: () => import('./update-form/update-form.module').then(m => m.UpdateFormModule) },
{ path: 'grid', loadChildren: () => import('./custom-grid/custom-grid.module').then(m => m.CustomGridModule) },
/*  { path: 'update', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
{ path: 'about-us', loadChildren: () => import('./components/about-us/about-us.module').then(m => m.AboutUsModule) } */];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
