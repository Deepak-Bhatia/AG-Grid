import { Component, ViewChild, OnInit } from '@angular/core';
import {
  ColDef,
  GridOptions,
  ICellRendererParams,
  GridReadyEvent,
  IDatasource,
  IGetRowsParams,
} from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { DataSourceService } from '../services/data-source.service';
import { ExcelService } from '../services/excel-service.service';
import { ButtonRendererComponent } from '../button-renderer/button-renderer.component';
import { DataShareService } from '../services/data-share.service';
import { Router } from '@angular/router';
import { xor } from 'lodash';

@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.scss'],
})
export class CustomGridComponent implements OnInit {
  title = 'ag-grid-demo';
  selectAllNodes = false;
  data: any = [
    {
      eid: 'e101',
      ename: 'ravi',
      esal: 1000,
    },
    {
      eid: 'e102',
      ename: 'ram',
      esal: 2000,
    },
    {
      eid: 'e103',
      ename: 'rajesh',
      esal: 3000,
    },
  ];
  frameworkComponents: any;
  gridOptions: Partial<GridOptions>;
  gridApi: any;
  gridOptionsConfiguration: any;
  gridColumnApi: any;
  columnDefs: ColDef[] = [];

  public defaultColDef: ColDef = {
    flex: 1,
    resizable: true,
    floatingFilter: true,
    sortable: true
  };

  public rowData!: any[];

  @ViewChild('agGrid') agGrid!: AgGridAngular;
  constructor(
    private http: HttpClient,
    private dataSourceService: DataSourceService,
    private excelService: ExcelService,
    private dataShareService: DataShareService,
    private router: Router
  ) {
    this.gridOptions = {
      headerHeight: 45,
      rowHeight: 30,
      cacheBlockSize: 50,
      cacheOverflowSize: 2,
      maxBlocksInCache: 10,
      paginationPageSize: 50,
      rowModelType: 'infinite',
      rowBuffer: 0,
      rowSelection: 'multiple',
      maxConcurrentDatasourceRequests: 1,
      infiniteInitialRowCount: 1000,
    };

    this.getGridOptions();
  }

  ngOnInit() {}

  getFilter(dataType: string): any {
    if (dataType == 'Link') return false;
    else if (dataType == 'String') return 'agTextColumnFilter';
    else if (dataType == 'Date') return 'agDateColumnFilter';
    else if (dataType == 'Number') return 'agNumberColumnFilter';
  }

  getGridOptions(): void {

    this.dataSourceService.getGridOptions().subscribe((data: any) => {
      this.gridOptionsConfiguration= data ;
      //console.log(data);
      let gridPropertiesList  : any[]  =[];
      this.gridOptionsConfiguration.Root.GridDefination.forEach(
        (x: any, i: number) => {

          
        if( x.ColumnName == 'RowNumber' ||   x.ColumnName =='TotalRows' || x.ColumnName =="TotalDisplayRows" ){
          return;
        }
          
          let gridProperties: any = {
            field: x.ColumnName,
            headerName: x.DisplayName,
            filter: this.getFilter(x.DataType),
            width: x.Width,
            minWidth: x.minWidth ? x.minWidth : x.Width,
            maxWidth: x.Width,
            resizable: true,
            pinned: x.pinned,
          };
          if (x.DataType == 'Link') {
            gridProperties.cellRenderer = ButtonRendererComponent;
  
            gridProperties.cellRendererParams = {
              onClick: this.onBtnClick2.bind(this),
              label: 'Click 1',
              buttonHtml: this.getButtonHtml(x),
              seqNo: x.SeqNo,
            };
          }
  
          gridPropertiesList.push(gridProperties);
        }

      );

      this.columnDefs = gridPropertiesList;
      console.log('Column Def Final' ,this.columnDefs);

    })
  }

  getButtonHtml(x: any) {
    if (x.SeqNo == '0')
      return `<img  style="height: 14px; width: 14px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAZiS0dEAP8A/wD/oL2nkwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wNi0xMlQwMzozNToxMyswODowMHiNd9sAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTYtMDQtMTZUMTY6MDM6MTgrMDg6MDCopvEIAAAAVHRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy9ob21lL2RiL3N2Z19pbmZvL3N2Zy8zOS9kMC8zOWQwY2EzMTY5N2RhMDA2N2NjNmZjMzhlNDJkODQ5ZC5zdmd1nKGwAAABYElEQVQ4T42SsarCQBBFb4KoAQshTRBBJJUgKFjEgGBjK9hbBOxShPxE4hekSCt2/oKFhWApWCjYi2IjklrYtzvuQ6M+eQeGZe7snU1mV2Gc6XSK4/EIRVHwjMhPpxN830elUkG328X1esVmswFc12V8D4WmaSyfz1PkcjnSwjAUvdlgMGDb7Za0er0uVrDhcEjFv2i1WmQoFApst9uxdrt9N85mM7nlnWazSabf6Pf7pJNxMplQ8kqj0UiZLMsi/XA4sIxwfsIwDJzPZ5kBtm1jtVohiiLs93uoUk8xn88RBIHMgE6nQyaB53kolUqfjY7jYDweI45j1Go1LJdLWQH4gGj9aBR3VywWYZom+BSl+oD/5rtRXLAorNdr9Ho9qaYRD4OMzy9GnPQNVVUfxtvtRuJ/SJKEjJlqtYrRaESdstksfeYrQhO1xWJBua7rwOVyYeVyOXXR34JPnPdh7Ae5DvANIdticAAAAABJRU5ErkJggg==" />`;
    else if (x.SeqNo == '1')
      return `<img  style="height: 14px; width: 14px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABB0lEQVQ4ja3TvUoDURCG4SdLkIAgKUTBQixSWFhrY2klgo14Id6BVTCFNyJWohZWFl6BFyA2CmIh+BM1umORE1nWjRJ1YFj2O+83O2fOHioiWAkugm7Ky2C1iq1VmDNc4wh7SV7HJqZrvBb5ejLVsYVxNDCFHEuJy9FEO3hAF7ufxYK1IEbMjWLbB8FL0Avuf8heYk/Ke98OjqsGVeL2g53Be1ZYe09AIzgPWqloO5hN2kTJ0x9iKTIspGHOpOdY0gZ8XtXBr+LfC4xcsGjIh1LffOTPHZRPIcMbOrjV/y/quEvac2IqT+EJc1jGIVq4wRXmk7aY9McvrQTN4LRwhYflWTA58H0AV8KEqGDAQvwAAAAASUVORK5CYII=" />`;
    else return `<a >Job Completion</a>`;
  }

  onBtnClick2(event: any) {
    console.log(event);
    this.dataShareService.jobData = event.rowData;
    this.router.navigate(['update']);
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridApi.setDomLayout('autoHeight');
    this.gridColumnApi = params.columnApi;
    //params.columnApi.autoSizeAllColumns();

    // var allColIds = params?.columnApi?.getAllColumns()?.filter(column=> (column['colId'] =="0" ||  column['colId'] =="1" ||  column['colId'] =="3" )  ) .map(column => column['colId'] );
    // if(allColIds!= undefined)
    //   params.columnApi.autoSizeColumns(allColIds);

    var dataSource = {
      getRows: (params: IGetRowsParams) => {
        //  TODO: Call a service that fetches list of users
        //console.log("Fetching startRow " + params.startRow + " of " + params.endRow);
        //console.log(params);

        this.dataSourceService.getUsers(params).subscribe((data: any) => {
          console.log( 'table Data', data['Table'], data['Table'][0].TotalRows  );
          params.successCallback(data['Table'], data['Table'][0].TotalRows );
        });
      },
    };
    this.gridApi!.setDatasource(dataSource);
  }

  getSelectedRows(): void {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => `${node.athlete} ${node.age}`)
      .join(', ');

    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  exportAsXLSX(): void {
    //TODO: Calculte Grid Data
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    let data = [];
    data = selectedNodes.map((node) => node.data);
    //console.log(data);
    if (data.length == 0) {
      let tempParams: any = {
        startRow: 0,
        endRow: this.gridApi.rowModel.getTopLevelRowCount(),
        filterModel: this.agGrid.api.getFilterModel(),
        sortModel: this.gridApi.sortController.getSortModel(),
      };
      this.dataSourceService.getUsers(tempParams).subscribe((data: any) => {
        //console.log(data);
        //let exportData = this.mapToExportData(data['data']);
        this.excelService.exportAsExcelFile(data['data'], 'Grid');
      });
    } else {
      let exportData = this.mapToExportData(data);
      this.excelService.exportAsExcelFile(exportData, 'Grid');
    }
  }

  mapToExportData(data: any[]): any[] {
    let exportData: any[] = [];
    data.forEach((rowData: any) => {
      let exportRowData: any = {};
      this.gridOptionsConfiguration?.Root?.GridDefination.forEach(
        (gridOptions: any) => {
          if (gridOptions.DataType !== 'Link')
            exportRowData[gridOptions.DisplayName] = rowData[gridOptions.SeqNo];
        }
      );
      exportData.push(exportRowData);
    });
    return exportData;
  }

  selectAll() {
    this.selectAllNodes = !this.selectAllNodes;
    this.gridApi.forEachNode((node: any) => {
      node.setSelected(this.selectAllNodes);
    });
  }
}
