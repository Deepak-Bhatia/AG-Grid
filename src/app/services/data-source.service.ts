import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataSourceService {
  BASE_URL = 'http://14.143.45.236:97';
  constructor(private http: HttpClient) {}

  getUsers(params: any) {
    console.log('Grid params', params);

    let body1 = {
      oprFlg: 'Grid',
      isGroupLevelEntry: '0',
      levelId: '0',
      groupId: '0',
      productionDivision: '',
      channel: '',
      viewAllJob: '',
      jobNo: '',
      priority: '',
      jobType: '',
      machine: '',
      machineName: '',
      startDate: '',
      startTime: '',
      tradeDept: '',
      complaint: '',
      orderBy: '',
      responsibility: 'All',
      showBreakDownTypeJob: '',
      selectAll: 'All',
      pDate: '',
      toplantdept: '',
      userid: '',
      showAsOnDate: '',
      iDisplayLength: params.endRow - params.startRow,
      iDisplayStart: params.startRow,
      whereClause:
        Object.keys(params.filterModel).length == 0
          ? ''
          : JSON.stringify(params.filterModel),
      orderByClause:
        params.sortModel.length == 0 ? '' : JSON.stringify(params.sortModel),
    };

    let body = {
      oprFlg: 'Grid',
      isGroupLevelEntry: '0',
      levelId: '0',
      groupId: '0',
      productionDivision: '',
      channel: '',
      viewAllJob: '',
      jobNo: '',
      priority: '',
      jobType: '',
      machine: '',
      machineName: '',
      startDate: '',
      startTime: '',
      tradeDept: '',
      complaint: '',
      orderBy: '',
      responsibility: 'All',
      showBreakDownTypeJob: '',
      selectAll: 'All',
      pDate: '',
      toplantdept: '',
      userid: '',
      showAsOnDate: '',
      iDisplayLength: params.endRow - params.startRow,
      iDisplayStart: params.startRow,
      whereClause: '',
      orderByClause: 'order by JobNo',
    };
    console.log(JSON.stringify(body1));
    return this.http
      .post(`${environment.apiEndPoint}/api/GetPendingJobGridData`, body)
      .pipe(
        map((response: any) => {
          return {
            records: response.Table,
            totalRecords: response.Table[0].TotalRows,
          };
        })
      );
  }

  getGridOptions() {
    let body = {
      functionName: 'FN-PNJB',
      gridName: 'Tbl_GPJ',
    };

    return this.http.post(
      `${environment.apiEndPoint}/api/Griddefination`,
      body
    );
  }
}
