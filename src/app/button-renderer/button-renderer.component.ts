import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';

@Component({
  selector: 'app-button-renderer',
  template: ` <div   (click)="onClick($event,this.seqNo)" [innerHTML]="htmlString"></div>`
})
export class ButtonRendererComponent  implements ICellRendererAngularComp {

  params : any;
  label: string;
  htmlString : string ;
  seqNo : string;

  agInit(params:any): void {
    this.params = params;
    this.label = this.params.label || null;
    this.htmlString = this.params.buttonHtml || null;
    this.seqNo = this.params.seqNo || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event:any, seqNo : any) {
    console.log("click");
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into the parents component
      const params = {
        event: $event,
        rowData: this.params.node.data,
        seqNo: seqNo
        // ...something
      }
      this.params.onClick(params);

    }
  }

}
