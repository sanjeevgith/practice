import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LandingService {


  constructor(public http: HttpClient) {

  }

  getPost(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  private valuePostData = new BehaviorSubject<any>([]); 
  valuePostData$ = this.valuePostData.asObservable();

  setValuePostData(value: any[]) {
    this.valuePostData.next(value); 
  }
  etValuePostData() {
    this.valuePostData$.subscribe((value: any[]) => {
      return value; 
    });
  }


}
