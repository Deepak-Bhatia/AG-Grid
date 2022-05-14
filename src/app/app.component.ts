import { Component, ViewChild } from '@angular/core';
import { ColDef, GridOptions, ICellRendererParams, GridReadyEvent, IDatasource, IGetRowsParams } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ag-grid-demo';
  public columnDefs: ColDef[] = [
    // this row shows the row index, doesn't use any data from the row
    {
      checkboxSelection: true,
      headerName: 'ID',
      maxWidth: 100,
      // it is important to have node.id here, so that when the id changes (which happens
      // when the row is loaded) then the cell is refreshed.
      valueGetter: 'node.id',
      cellRenderer: function (params: ICellRendererParams) {
        if (params.value !== undefined) {
          return params.value;
        } else {
          return '<img src="https://www.ag-grid.com/example-assets/loading.gif">';
        }
      },
    },
    { field: 'athlete', minWidth: 150 },
    { field: 'age' },
    { field: 'country', minWidth: 150 },
    { field: 'year' },
    { field: 'date', minWidth: 150 },
    { field: 'sport', minWidth: 150 },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    resizable: true,
    minWidth: 100,
  };
  public rowBuffer = 0;
  public rowSelection = 'multiple';
  public rowModelType = 'infinite';
  public cacheBlockSize = 100;
  public cacheOverflowSize = 2;
  public maxConcurrentDatasourceRequests = 1;
  public infiniteInitialRowCount = 1000;
  public maxBlocksInCache = 10;
  public rowData!: any[];

@ViewChild('agGrid') agGrid!: AgGridAngular;
constructor(private http: HttpClient) {

}
onGridReady(params: GridReadyEvent) {
  this.http
    .get<any[]>('https://www.ag-grid.com/example-assets/olympic-winners.json')
    .subscribe((data:any) => {
      const dataSource: IDatasource = {
        rowCount: undefined,
        getRows: function (params: IGetRowsParams) {
          console.log(
            'asking for ' + params.startRow + ' to ' + params.endRow
          );
          // At this point in your code, you would call the server.
          // To make the demo look real, wait for 500ms before returning
          setTimeout(function () {
            // take a slice of the total rows
            const rowsThisPage = data.slice(params.startRow, params.endRow);
            // if on or after the last page, work out the last row.
            let lastRow = -1;
            if (data.length <= params.endRow) {
              lastRow = data.length;
            }
            // call the success callback
            params.successCallback(rowsThisPage, lastRow);
          }, 500);
        },
      };
      params.api!.setDatasource(dataSource);
    });
}

getSelectedRows(): void {
       const selectedNodes = this.agGrid.api.getSelectedNodes();
        const selectedData = selectedNodes.map(node => node.data);
        const selectedDataStringPresentation = selectedData.map(node => `${node.athlete} ${node.age}`).join(', ');

      alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }
}
