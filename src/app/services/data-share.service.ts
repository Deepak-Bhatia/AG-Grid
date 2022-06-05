import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
private jobDataSubject = new BehaviorSubject(undefined);
jobData$ = this.jobDataSubject.asObservable();

set jobData(data:any){
this.jobDataSubject.next(data);
}

get jobData(): any {
  return this.jobDataSubject.value;
}

constructor() { }


}
