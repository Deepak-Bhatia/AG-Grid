import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {


constructor(private http: HttpClient) { }
fetch() {
  return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
}

getUsers(params:any) {

   console.log("Grid params", params)

   let body1 ={
    "oprFlg": "Grid",
    "isGroupLevelEntry": "0",
    "levelId": "0",
    "groupId": "0",
    "productionDivision": "",
    "channel": "",
    "viewAllJob": "",
    "jobNo": "",
    "priority": "",
    "jobType": "",
    "machine": "",
    "machineName": "",
    "startDate": "",
    "startTime": "",
    "tradeDept": "",
    "complaint": "",
    "orderBy": "",
    "responsibility": "All",
    "showBreakDownTypeJob": "",
    "selectAll": "All",
    "pDate": "",
    "toplantdept": "",
    "userid": "",
    "showAsOnDate": "",
    "iDisplayLength": params.endRow -  params.startRow  ,
    "iDisplayStart": params.startRow ,
    "whereClause": Object.keys(  params.filterModel ).length == 0 ?  "" :  JSON.stringify( params.filterModel ),
    "orderByClause": params.sortModel.length == 0 ? "" :  JSON.stringify( params.sortModel )
  }


  let body ={
    "oprFlg": "Grid",
    "isGroupLevelEntry": "0",
    "levelId": "0",
    "groupId": "0",
    "productionDivision": "",
    "channel": "",
    "viewAllJob": "",
    "jobNo": "",
    "priority": "",
    "jobType": "",
    "machine": "",
    "machineName": "",
    "startDate": "",
    "startTime": "",
    "tradeDept": "",
    "complaint": "",
    "orderBy": "",
    "responsibility": "All",
    "showBreakDownTypeJob": "",
    "selectAll": "All",
    "pDate": "",
    "toplantdept": "",
    "userid": "",
    "showAsOnDate": "",
    "iDisplayLength": params.endRow -  params.startRow  ,
    "iDisplayStart": params.startRow ,
    "whereClause": "",
    "orderByClause": "order by JobNo"
  }
  console.log(JSON.stringify( body1 ))
  return this.http.post('http://14.143.45.236:97/api/GetPendingJobGridData', body);
  //return this.dummyData;

//   let obs = new Observable((subscriber ) => {
//     setTimeout(()=>{
//         subscriber.next(this.dummyData);
//         subscriber.complete();
//     }, 0);
//   });
// return obs;

}



getGridOptions() {

  let body= {
    "functionName": "FN-PNJB",
    "gridName": "Tbl_GPJ"
  }

  return this.http.post('http://14.143.45.236:97/api/Griddefination', body);
//   return this.dummyData;

//   let obs = new Observable((subscriber ) => {
//     setTimeout(()=>{
//         subscriber.next(this.dummyData);
//         subscriber.complete();
//     }, 0);
//   });
// return obs;

}





}
