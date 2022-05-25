import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UpdateFormComponent } from './update-form.component';

const routes: Routes = [
  { path: '',
  component: UpdateFormComponent
},
];

export const UpdateFormRoutes = RouterModule.forChild(routes);


@NgModule({
  imports: [UpdateFormRoutes],
  exports: [RouterModule]
})
export class UpdateFormRoutingModule { }
