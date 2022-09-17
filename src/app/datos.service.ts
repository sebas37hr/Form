import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private personas$ = new BehaviorSubject<any[]>([]);

  setUsers(personas: any[]) {
    this.personas$.next(personas);
  }
  getUsers() {
    return this.personas$.asObservable();
  }

  constructor() { }

}
