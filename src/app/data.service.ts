import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService {
  private gols = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  gol = this.gols.asObservable();

  constructor() { }
  
  changeGoal(gol) {
    this.gols.next(gol)
  }
}
