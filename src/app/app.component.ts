import { Component, ViewChild } from '@angular/core';
import { ColDef, GridOptions, ICellRendererParams, GridReadyEvent, IDatasource, IGetRowsParams } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { DataSourceService } from './services/data-source.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ag-grid-demo';
  gridOptions: Partial<GridOptions>;
  gridApi:any;

  gridColumnApi:any;
  columnDefs: ColDef[];

  public defaultColDef: ColDef = {
    flex: 1,
    resizable: true,
    minWidth: 100,
  };

  public rowData!: any[];

@ViewChild('agGrid') agGrid!: AgGridAngular;
constructor(private http: HttpClient,private dataSourceService:DataSourceService) {
  this.columnDefs= [
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
    { field: 'athlete', minWidth: 150,sortable: true,filter: 'agTextColumnFilter' },
    { field: 'age' ,sortable: true,filter: 'agTextColumnFilter'},
    { field: 'country', minWidth: 150 ,sortable: true,filter: 'agTextColumnFilter'},
    { field: 'year',sortable: true,filter: 'agTextColumnFilter' },
    { field: 'date', minWidth: 150 ,sortable: true,filter: 'agTextColumnFilter'},
    { field: 'sport', minWidth: 150 ,sortable: true,filter: 'agTextColumnFilter'},
    { field: 'gold' ,sortable: true,filter: 'agTextColumnFilter'},
    { field: 'silver' ,sortable: true,filter: 'agTextColumnFilter'},
    { field: 'bronze' ,sortable: true,filter: 'agTextColumnFilter'},
    { field: 'total' ,sortable: true,filter: 'agTextColumnFilter'},
  ];

  this.gridOptions = {
    headerHeight: 45,
    rowHeight: 30,
    cacheBlockSize: 50,
    cacheOverflowSize: 2,
    maxBlocksInCache:10,
    paginationPageSize: 50,
    rowModelType: 'infinite',
    rowBuffer: 0,
    rowSelection: 'multiple',
    maxConcurrentDatasourceRequests: 1,
    infiniteInitialRowCount: 1000,
  }
}

onGridReady(params: GridReadyEvent) {
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;

  var dataSource = {
    getRows: (params: IGetRowsParams) => {
      //  TODO: Call a service that fetches list of users
      console.log("Fetching startRow " + params.startRow + " of " + params.endRow);
      console.log(params);
      this.dataSourceService.getUsers(params)
        .subscribe((data:any) => {
          console.log(data);
          params.successCallback(data['users'], data['totalRecords'])
        });
    }
  }
  this.gridApi!.setDatasource(dataSource);

 /*  this.http
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
            const rowsThisPage = data.response.slice(params.startRow, params.endRow);
            // if on or after the last page, work out the last row.
            let lastRow = -1;
            if (data.response.length <= params.endRow) {
              lastRow = data.response.length;
            }
            // call the success callback
            params.successCallback(rowsThisPage, lastRow);
          }, 500);
        },
      };
      this.gridApi!.setDatasource(dataSource);
    }); */
}

getSelectedRows(): void {
       const selectedNodes = this.agGrid.api.getSelectedNodes();
        const selectedData = selectedNodes.map(node => node.data);
        const selectedDataStringPresentation = selectedData.map(node => `${node.athlete} ${node.age}`).join(', ');

      alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }
}
