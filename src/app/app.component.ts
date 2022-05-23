import { Component, ViewChild , OnInit } from '@angular/core';
import { ColDef, GridOptions, ICellRendererParams, GridReadyEvent, IDatasource, IGetRowsParams } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { DataSourceService } from './services/data-source.service';
import { ExcelService } from './services/excel-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'ag-grid-demo';
  selectAllNodes = false;
  data: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
    },{
    eid: 'e102',
    ename: 'ram',
    esal: 2000
    },{
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
    }];
  gridOptions: Partial<GridOptions>;
  gridApi:any;

  gridColumnApi:any;
  columnDefs: ColDef[] = [];

  public defaultColDef: ColDef = {
    flex: 1,
    resizable: true,
    floatingFilter: true,
  };

  public rowData!: any[];

@ViewChild('agGrid') agGrid!: AgGridAngular;
constructor(private http: HttpClient,private dataSourceService:DataSourceService,private excelService:ExcelService) {

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
    infiniteInitialRowCount: 1000
  }
}


ngOnInit() {
  this.getGridOptions();
}


getFilter(dataType: string) : any{
  if(dataType == 'Link')
    return false;
  else if(dataType == 'String')
    return 'agTextColumnFilter';
}


getGridOptions() : void {

  let gridOptions= {
   "Root": {
     "GridDefination": [
       {
         "SeqNo": "0",
         "ColumnName": "Link1",
         "DisplayName": "Edit",
         "Visibility": "1",
         "DataType": "Link",
         "Width" : "80"
       },
       {
         "SeqNo": "1",
         "ColumnName": "Link2",
         "DisplayName": "Delete",
         "Visibility": "1",
         "DataType": "Link",
         "Width" : "80"
       },
       {
         "SeqNo": "2",
         "ColumnName": "Link2",
         "DisplayName": "Job Completion",
         "Visibility": "1",
         "DataType": "Link",
         "Width" : "150"
       },
       {
         "SeqNo": "3",
         "ColumnName": "NAME1",
         "DisplayName": "",
         "Visibility": "1",
         "DataType": "String",
         "Width" : "100"
       },
       {
         "SeqNo": "4",
         "ColumnName": "WORKSHOP_NO",
         "DisplayName": "Job No.",
         "Visibility": "1",
         "DataType": "String"
       },
       {
         "SeqNo": "5",
         "ColumnName": "BUILDING_NO",
         "DisplayName": "Priority",
         "Visibility": "1",
         "DataType": "String"
       },
       {
         "SeqNo": "6",
         "ColumnName": "FILLER",
         "DisplayName": "Type",
         "Visibility": "1",
         "DataType": "String"
       },
       {
         "SeqNo": "7",
         "ColumnName": "USER_ID",
         "DisplayName": "Line",
         "Visibility": "1",
         "DataType": "String"
       },
       {
         "SeqNo": "8",
         "ColumnName": "LastUpdatedDate",
         "DisplayName": "Machine Code",
         "Visibility": "1",
         "DataType": "String"
       },
       {
         "SeqNo": "9",
         "ColumnName": "InsertionDate",
         "DisplayName": "Machine Name",
         "Visibility": "1",
         "DataType": "String"
       },
       {
         "SeqNo": "10",
         "ColumnName": "LastUpdatedBy",
         "DisplayName": "Occ Date",
         "Visibility": "1",
         "DataType": "String"
       },
       {
         "SeqNo": "11",
         "ColumnName": "InsertedBy",
         "DisplayName": "Occ Time",
         "Visibility": "1",
         "DataType": "String"
       },
       {
         "SeqNo": "12",
         "ColumnName": "DisplayDetails",
         "DisplayName": "Tr",
         "Visibility": "1",
         "DataType": "String"
       },
       {
         "SeqNo": "13",
         "ColumnName": "DisplayDetails",
         "DisplayName":"Job Description",
         "Visibility": "1",
         "DataType": "String"
       },
       {
         "SeqNo": "14",
         "ColumnName": "DisplayDetails",
         "DisplayName": "Shop",
         "Visibility": "1",
         "DataType": "String"
       },
       {
         "SeqNo": "15",
         "ColumnName": "DisplayDetails",
         "DisplayName": "Job Initiated By",
         "Visibility": "1",
         "DataType": "String"
       },
       {
         "SeqNo": "16",
         "ColumnName": "DisplayDetails",
         "DisplayName": "User Id",
         "Visibility": "1",
         "DataType": "String"
       }
     ],
     "UserGridCustomisation": {
       "Visibility": "0,1,2,3,4,5,6,7,8,9,10,11,12,",
       "Sequence": "0,1,2,3,4,5,6,7,8,9,10,11,12"
     },
     "url_col_Click": {
       "cols": [
         {
           "colums_no": "1",
           "type": "function",
           "action": "functionname",
           "Target": "blank",
           "params": [
             {
               "key": "key",
               "value": "value"
             },
             {
               "key": "key",
               "value": "value"
             }
           ]
         },
         {
           "colums_no": "2",
           "type": "link",
           "action": "link",
           "Target": "blank",
           "params": [
             {
               "key": "key",
               "value": "value"
             },
             {
               "key": "key",
               "value": "value"
             }
           ]
         }
       ]
     },
     "SearchType": "multiple/single",
     "apidata": {
       "apiurl": "https://jsonplaceholder.typicode.com/posts",
       "apiparams": [
         {
           "key": "key",
           "value": "value"
         },
         {
           "key": "key",
           "value": "value"
         }
       ]
     },
     "userId": "userId"
   }
  }


  gridOptions.Root.GridDefination.forEach( (x,i)=>{
  let gridProperties: any = { field: i.toString(), headerName: x.DisplayName , filter: this.getFilter(x.DataType)  , width :  x.Width , minWidth  :  x.Width, maxWidth  :  x.Width, resizable: true  }
  if(x.DataType == 'Link' ){
    gridProperties['cellRenderer'] =  (params : any ) => {
      // put the value in bold
    console.log(params)
    if(x.SeqNo=="0")
      return  `<img style="height: 14px; width: 14px" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4NCjxwYXRoIGQ9Ik03Ny45MjYsOTQuOTI0SDguMjE3QzYuNDQxLDk0LjkyNCw1LDkzLjQ4NCw1LDkxLjcwNlYyMS45OTdjMC0xLjc3NywxLjQ0MS0zLjIxNywzLjIxNy0zLjIxN2gzNC44NTQgYzEuNzc3LDAsMy4yMTcsMS40NDEsMy4yMTcsMy4yMTdzLTEuNDQxLDMuMjE3LTMuMjE3LDMuMjE3SDExLjQzNXY2My4yNzVoNjMuMjc0VjU2Ljg1MWMwLTEuNzc3LDEuNDQxLTMuMjE3LDMuMjE3LTMuMjE3IGMxLjc3NywwLDMuMjE3LDEuNDQxLDMuMjE3LDMuMjE3djM0Ljg1NUM4MS4xNDQsOTMuNDg0LDc5LjcwMyw5NC45MjQsNzcuOTI2LDk0LjkyNHoiLz4NCjxwYXRoIGQ9Ik05NC4wNTksMTYuMDM0TDg0LjAzMiw2LjAxN2MtMS4yNTUtMS4yNTUtMy4yOTItMS4yNTUtNC41NDcsMGwtOS4wNjIsOS4wNzNMMzUuMzk2LDUwLjExNiBjLTAuMjksMC4yOS0wLjUyNSwwLjYzMy0wLjY4NiwxLjAwOGwtNy40OTYsMTcuNTEzYy0wLjUyNiwxLjIxMi0wLjI0NywyLjYxNywwLjY3NiwzLjUzOWMwLjYyMiwwLjYyMiwxLjQzNywwLjk0NCwyLjI3NCwwLjk0NCBjMC40MjksMCwwLjg1OC0wLjA4NiwxLjI3Ni0wLjI1N2wxNy41MTMtNy40OTZjMC4zNzUtMC4xNjEsMC43MTktMC4zOTcsMS4wMDgtMC42ODZsMzUuMDI2LTM1LjAyNmw5LjA3My05LjA2MiBDOTUuMzE0LDE5LjMyNiw5NS4zMTQsMTcuMjg5LDk0LjA1OSwxNi4wMzR6IE0zNi4yODYsNjMuNzlsMi45MjgtNi44MjFsMy44OTMsMy44OTNMMzYuMjg2LDYzLjc5eiBNNDYuOTI1LDU4LjYyMWwtNS40NjktNS40NjkgTDczLjAwNywyMS42bDUuNDcsNS40NjlMNDYuOTI1LDU4LjYyMXogTTgxLjUxMSwyNC4wMzRsLTUuNDY5LTUuNDY5bDUuNzE2LTUuNzE2bDUuNDY5LDUuNDU5TDgxLjUxMSwyNC4wMzR6Ii8+DQo8L3N2Zz4NCg==" />`;
    else if(x.SeqNo=="1")
      return  `<img style="height: 14px; width: 14px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABB0lEQVQ4ja3TvUoDURCG4SdLkIAgKUTBQixSWFhrY2klgo14Id6BVTCFNyJWohZWFl6BFyA2CmIh+BM1umORE1nWjRJ1YFj2O+83O2fOHioiWAkugm7Ky2C1iq1VmDNc4wh7SV7HJqZrvBb5ejLVsYVxNDCFHEuJy9FEO3hAF7ufxYK1IEbMjWLbB8FL0Avuf8heYk/Ke98OjqsGVeL2g53Be1ZYe09AIzgPWqloO5hN2kTJ0x9iKTIspGHOpOdY0gZ8XtXBr+LfC4xcsGjIh1LffOTPHZRPIcMbOrjV/y/quEvac2IqT+EJc1jGIVq4wRXmk7aY9McvrQTN4LRwhYflWTA58H0AV8KEqGDAQvwAAAAASUVORK5CYII=" />`;
    else
      return  `<a href="">Job Completion</a>`;
    }
  }
  

this.columnDefs.push( gridProperties);
})

console.log( this.columnDefs);

}



onGridReady(params: GridReadyEvent) {
  this.gridApi = params.api;
  this.gridApi.setDomLayout("autoHeight");
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

      this.dataSourceService.getUsers(params)
        .subscribe((data:any) => {
          //console.log(data);
          params.successCallback(data['data'], data['iTotalRecords'])
        })
    }
  }
  this.gridApi!.setDatasource(dataSource);

}

getSelectedRows(): void {
      const selectedNodes = this.agGrid.api.getSelectedNodes();
      const selectedData = selectedNodes.map(node => node.data);
      const selectedDataStringPresentation = selectedData.map(node => `${node.athlete} ${node.age}`).join(', ');

      alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }

    exportAsXLSX():void {
      //TODO: Calculte Grid Data
      const selectedNodes = this.agGrid.api.getSelectedNodes();
      let data=[];
      data = selectedNodes.map(node => node.data);
      //console.log(data);
      if(data.length == 0){

        let tempParams : any  =  { startRow: 0,  endRow : this.gridApi.rowModel.getTopLevelRowCount() , filterModel : this.agGrid.api.getFilterModel() , sortModel : this.gridApi.sortController.getSortModel()   }
        this.dataSourceService.getUsers(tempParams)
        .subscribe((data:any) => {
          //console.log(data);
          this.excelService.exportAsExcelFile(data['data'], 'sample');
        })

      }else{
        this.excelService.exportAsExcelFile(data, 'sample');
      }      
}

selectAll(){
  this.selectAllNodes = !this.selectAllNodes;
  this.gridApi.forEachNode((node:any) => {
    node.setSelected(this.selectAllNodes);
    });
  }
}
