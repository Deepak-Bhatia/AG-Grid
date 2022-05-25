import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomGridComponent } from './custom-grid.component';


const routes: Routes = [
  { path: '',
  component: CustomGridComponent
},
];

export const UpdateFormRoutes = RouterModule.forChild(routes);


@NgModule({
  imports: [UpdateFormRoutes],
  exports: [RouterModule]
})
export class CustomGridRoutingModule { }
