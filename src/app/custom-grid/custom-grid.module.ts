import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomGridComponent } from '../custom-grid/custom-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { CustomGridRoutingModule } from './custom-grid-routing.module';
import { ButtonRendererComponent } from '../button-renderer/button-renderer.component';


@NgModule({
  declarations: [
    CustomGridComponent,
    ButtonRendererComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    CustomGridRoutingModule
  ]
})
export class CustomGridModule { }
