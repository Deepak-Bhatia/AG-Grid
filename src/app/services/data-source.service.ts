import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

constructor(private http: HttpClient) { }
fetch() {
  return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
}

getUsers(params:any) {
  return this.http.post('https://www.ag-grid.com/example-assets/olympic-winners.json', params);
}
}
