import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  dummyData= {
    "TotalRecords": 25,
    "data": [
      {
        "DT_RowId": "0",
        "Edit": "-4865",
        "Delete": "1",
        "Job_Completion": "27-03-2018",
        "XYZ": "",
        "Job_No": "2001200",
        "Priority": "High",
        "Type": "ABPM",
        "Line": "TEST-LINE",
        "Machine_Code": "TEST-MC-001",
        "Machine_Name": "TEST-MACHINE-001",
        "Occ_Date": "02-12-2022",
        "Occ_Time": "08:30",
        "Tr": "M",
        "Job_Description": "Testing Test Activity",
        "Shop": "Test Shop",
        "Job_Initiated_By": "wspl",
        "User_Id": "0wspi"
      },
      {
        "DT_RowId": "2",
        "Edit": "-4865",
        "Delete": "1",
        "Job_Completion": "27-03-2018",
        "XYZ": "",
        "Job_No": "2001200",
        "Priority": "High",
        "Type": "ABPM",
        "Line": "TEST-LINE",
        "Machine_Code": "TEST-MC-001",
        "Machine_Name": "TEST-MACHINE-001",
        "Occ_Date": "02-12-2022",
        "Occ_Time": "08:30",
        "Tr": "M",
        "Job_Description": "Testing Test Activity",
        "Shop": "Test Shop",
        "Job_Initiated_By": "wspl",
        "User_Id": "0wspi"
      },
      {
        "DT_RowId": "2",
        "Edit": "-4865",
        "Delete": "1",
        "Job_Completion": "27-03-2018",
        "XYZ": "",
        "Job_No": "2001200",
        "Priority": "High",
        "Type": "ABPM",
        "Line": "TEST-LINE",
        "Machine_Code": "TEST-MC-001",
        "Machine_Name": "TEST-MACHINE-001",
        "Occ_Date": "02-12-2022",
        "Occ_Time": "08:30",
        "Tr": "M",
        "Job_Description": "Testing Test Activity",
        "Shop": "Test Shop",
        "Job_Initiated_By": "wspl",
        "User_Id": "0wspi"
      },
      {
        "DT_RowId": "3",
        "Edit": "-4865",
        "Delete": "1",
        "Job_Completion": "27-03-2018",
        "XYZ": "",
        "Job_No": "2001200",
        "Priority": "High",
        "Type": "ABPM",
        "Line": "TEST-LINE",
        "Machine_Code": "TEST-MC-001",
        "Machine_Name": "TEST-MACHINE-001",
        "Occ_Date": "02-12-2022",
        "Occ_Time": "08:30",
        "Tr": "M",
        "Job_Description": "Testing Test Activity",
        "Shop": "Test Shop",
        "Job_Initiated_By": "wspl",
        "User_Id": "0wspi"
      },
      {
        "DT_RowId": "4",
        "Edit": "-4865",
        "Delete": "1",
        "Job_Completion": "27-03-2018",
        "XYZ": "",
        "Job_No": "2001200",
        "Priority": "High",
        "Type": "ABPM",
        "Line": "TEST-LINE",
        "Machine_Code": "TEST-MC-001",
        "Machine_Name": "TEST-MACHINE-001",
        "Occ_Date": "02-12-2022",
        "Occ_Time": "08:30",
        "Tr": "M",
        "Job_Description": "Testing Test Activity",
        "Shop": "Test Shop",
        "Job_Initiated_By": "wspl",
        "User_Id": "0wspi"
      },
      {
        "DT_RowId": "5",
        "Edit": "-4865",
        "Delete": "1",
        "Job_Completion": "27-03-2018",
        "XYZ": "",
        "Job_No": "2001200",
        "Priority": "High",
        "Type": "ABPM",
        "Line": "TEST-LINE",
        "Machine_Code": "TEST-MC-001",
        "Machine_Name": "TEST-MACHINE-001",
        "Occ_Date": "02-12-2022",
        "Occ_Time": "08:30",
        "Tr": "M",
        "Job_Description": "Testing Test Activity",
        "Shop": "Test Shop",
        "Job_Initiated_By": "wspl",
        "User_Id": "0wspi"
      },
      {
        "DT_RowId": "6",
        "Edit": "-4865",
        "Delete": "1",
        "Job_Completion": "27-03-2018",
        "XYZ": "",
        "Job_No": "2001200",
        "Priority": "High",
        "Type": "ABPM",
        "Line": "TEST-LINE",
        "Machine_Code": "TEST-MC-001",
        "Machine_Name": "TEST-MACHINE-001",
        "Occ_Date": "02-12-2022",
        "Occ_Time": "08:30",
        "Tr": "M",
        "Job_Description": "Testing Test Activity",
        "Shop": "Test Shop",
        "Job_Initiated_By": "wspl",
        "User_Id": "0wspi"
      },
      {
        "DT_RowId": "7",
        "Edit": "-4865",
        "Delete": "1",
        "Job_Completion": "27-03-2018",
        "XYZ": "",
        "Job_No": "2001200",
        "Priority": "High",
        "Type": "ABPM",
        "Line": "TEST-LINE",
        "Machine_Code": "TEST-MC-001",
        "Machine_Name": "TEST-MACHINE-001",
        "Occ_Date": "02-12-2022",
        "Occ_Time": "08:30",
        "Tr": "M",
        "Job_Description": "Testing Test Activity",
        "Shop": "Test Shop",
        "Job_Initiated_By": "wspl",
        "User_Id": "0wspi"
      },
      {
        "DT_RowId": "8",
        "Edit": "-4865",
        "Delete": "1",
        "Job_Completion": "27-03-2018",
        "XYZ": "",
        "Job_No": "2001200",
        "Priority": "High",
        "Type": "ABPM",
        "Line": "TEST-LINE",
        "Machine_Code": "TEST-MC-001",
        "Machine_Name": "TEST-MACHINE-001",
        "Occ_Date": "02-12-2022",
        "Occ_Time": "08:30",
        "Tr": "M",
        "Job_Description": "Testing Test Activity",
        "Shop": "Test Shop",
        "Job_Initiated_By": "wspl",
        "User_Id": "0wspi"
      },
      {
        "DT_RowId": "9",
        "Edit": "-4865",
        "Delete": "1",
        "Job_Completion": "27-03-2018",
        "XYZ": "",
        "Job_No": "2001200",
        "Priority": "High",
        "Type": "ABPM",
        "Line": "TEST-LINE",
        "Machine_Code": "TEST-MC-001",
        "Machine_Name": "TEST-MACHINE-001",
        "Occ_Date": "02-12-2022",
        "Occ_Time": "08:30",
        "Tr": "M",
        "Job_Description": "Testing Test Activity",
        "Shop": "Test Shop",
        "Job_Initiated_By": "wspl",
        "User_Id": "0wspi"
      },
      {
        "DT_RowId": "10",
        "DT_RowClass": "",
        "Edit": "-4865",
        "Delete": "1",
        "Job_Completion": "27-03-2018",
        "XYZ": "",
        "Job_No": "2001200",
        "Priority": "High",
        "Type": "ABPM",
        "Line": "TEST-LINE",
        "Machine_Code": "TEST-MC-001",
        "Machine_Name": "TEST-MACHINE-001",
        "Occ_Date": "02-12-2022",
        "Occ_Time": "08:30",
        "Tr": "M",
        "Job_Description": "Testing Test Activity",
        "Shop": "Test Shop",
        "Job_Initiated_By": "wspl",
        "User_Id": "0wspi"
      },
      {
        "DT_RowId": "11",
        "Edit": "-4865",
        "Delete": "1",
        "Job_Completion": "27-03-2018",
        "XYZ": "",
        "Job_No": "2001200",
        "Priority": "High",
        "Type": "ABPM",
        "Line": "TEST-LINE",
        "Machine_Code": "TEST-MC-001",
        "Machine_Name": "TEST-MACHINE-001",
        "Occ_Date": "02-12-2022",
        "Occ_Time": "08:30",
        "Tr": "M",
        "Job_Description": "Testing Test Activity",
        "Shop": "Test Shop",
        "Job_Initiated_By": "wspl",
        "User_Id": "0wspi"
      },
      {
        "DT_RowId": "12",
        "Edit": "-4865",
        "Delete": "1",
        "Job_Completion": "27-03-2018",
        "XYZ": "",
        "Job_No": "2001200",
        "Priority": "High",
        "Type": "ABPM",
        "Line": "TEST-LINE",
        "Machine_Code": "TEST-MC-001",
        "Machine_Name": "TEST-MACHINE-001",
        "Occ_Date": "02-12-2022",
        "Occ_Time": "08:30",
        "Tr": "M",
        "Job_Description": "Testing Test Activity",
        "Shop": "Test Shop",
        "Job_Initiated_By": "wspl",
        "User_Id": "0wspi"
      },
      {
        "DT_RowId": "13",
        "Edit": "-4865",
        "Delete": "1",
        "Job_Completion": "27-03-2018",
        "XYZ": "",
        "Job_No": "2001200",
        "Priority": "High",
        "Type": "ABPM",
        "Line": "TEST-LINE",
        "Machine_Code": "TEST-MC-001",
        "Machine_Name": "TEST-MACHINE-001",
        "Occ_Date": "02-12-2022",
        "Occ_Time": "08:30",
        "Tr": "M",
        "Job_Description": "Testing Test Activity",
        "Shop": "Test Shop",
        "Job_Initiated_By": "wspl",
        "User_Id": "0wspi"
      },
      {
        "DT_RowId": "14",
        "Edit": "-4865",
        "Delete": "1",
        "Job_Completion": "27-03-2018",
        "XYZ": "",
        "Job_No": "2001200",
        "Priority": "High",
        "Type": "ABPM",
        "Line": "TEST-LINE",
        "Machine_Code": "TEST-MC-001",
        "Machine_Name": "TEST-MACHINE-001",
        "Occ_Date": "02-12-2022",
        "Occ_Time": "08:30",
        "Tr": "M",
        "Job_Description": "Testing Test Activity",
        "Shop": "Test Shop",
        "Job_Initiated_By": "wspl",
        "User_Id": "0wspi"
      }
    ]
  };



constructor(private http: HttpClient) { }
fetch() {
  return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
}

getUsers(params:any) {

  //console.log(params)

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
    "iDisplayLength": "10",
    "iDisplayStart": "1",
    "whereClause": "",
    "orderByClause": "order by JobNo"
  }

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
