import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  private modalSubject = new Subject<string>();
  modal$ = this.modalSubject.asObservable();

  open(message: string) {
    this.modalSubject.next(message);
  }
}
