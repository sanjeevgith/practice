import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {

  private headerData  = new BehaviorSubject<any>([]);
  headerData$ = this.headerData.asObservable();


  setdata(data:any){
    this.headerData.next(data);
  }
  
}
